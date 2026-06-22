# LLM-Agnostic Coding Context Spec

A pattern for giving AI coding assistants persistent project context without
tying that context to any single vendor's tool.

## The problem

Every AI coding tool reads its own instruction file from your repo: Claude Code
looks for `CLAUDE.md`, Codex looks for `AGENTS.md`, Gemini CLI looks for
`GEMINI.md`, Cursor uses `.cursorrules`, GitHub Copilot uses
`.github/copilot-instructions.md`, and so on. There is no single filename that
every tool reads. Maintaining the same project knowledge in each of those files
means duplication and drift.

## Core principle

Keep **one neutral source of truth** for project context, and give each tool a
**thin pointer** at the filename it expects. The pointer either imports or
symlinks to the shared source, so there is exactly one place to edit.

```
neutral source (real content)  ──┬──  CLAUDE.md   (pointer)
                                 ├──  AGENTS.md   (pointer)
                                 └──  GEMINI.md   (pointer)
```

## Recommended repository layout

```
your-project/
├── .git/
├── CLAUDE.md                  # thin pointer → @context/index.md
├── AGENTS.md                  # thin pointer (import or symlink) → context/index.md
├── context/                   # the neutral source of truth
│   ├── index.md               # entry file; imports the core topic files
│   ├── architecture.md
│   ├── conventions.md
│   ├── workflows.md
│   └── reference/             # read on demand, NOT imported by index.md
│       └── api-dump.md
└── ...
```

### Why a `context/` folder

It is vendor-neutral, discoverable (not hidden), and self-contained, so it can
be moved or symlinked elsewhere without breaking. Keeping it un-hidden and out
of any tool-specific directory (like `.claude/`) is what preserves neutrality.

### The entry file: `context/index.md`

Name it `index.md` — it reads as "start here," is a near-universal convention,
and carries no tooling baggage. Avoid naming it `README.md`, because some hosts
(e.g. GitHub) auto-render a folder's `README.md`, which conflates the
human-facing readme with the agent entry point.

`index.md` does nothing but pull in the core topic files. Because imports
resolve relative to the importing file, it references its siblings with bare
names, not folder-qualified paths:

```
@architecture.md
@conventions.md
@workflows.md
```

### Topic files

Use plain, descriptive names: `architecture.md`, `conventions.md`,
`workflows.md`, `glossary.md`, etc. One topic per file keeps the set easy to
scan and maintain.

## Key mechanics and constraints

These govern how the pattern behaves and are worth designing around.

**Filename discovery is exact.** Claude Code reads `CLAUDE.md`, not arbitrary
names and not `AGENTS.md`. A file called `context.md` at the root is not
auto-discovered. This is why a pointer at the expected filename is required.

**Pointer location.** A Claude project pointer may live at either `./CLAUDE.md`
or `./.claude/CLAUDE.md`.

**Import syntax.** Inside a pointer or context file, `@path/to/file` pulls in
another file. Both relative and absolute paths work. Relative paths resolve
**relative to the file containing the import**, not the working directory — so a
root `CLAUDE.md` uses `@context/index.md`, while `index.md` itself uses
`@architecture.md`.

**Import depth.** Imports may recurse up to four hops deep. A flat fan-out
(entry file imports topic files directly) sits well within that limit and leaves
ample headroom.

**Everything imported loads at session start.** Imported content enters the
context window every session and spends tokens. Keep `index.md` importing only
what the assistant should hold in *every* session. Push deep reference material
(long API dumps, design history, runbooks) into files that are read on demand
rather than auto-imported — e.g. a `context/reference/` subfolder that
`index.md` does not import.

**Maintainer comments are free.** Block-level HTML comments
(`<!-- ... -->`) in a `CLAUDE.md` are stripped before the content is injected
into context, so they cost no tokens. Use them to document the indirection for
humans.

**Symlinks are the most universal pointer.** `ln -s context/index.md CLAUDE.md`
makes the pointer literally *be* the shared content, which works for any tool
that simply reads its expected filename — regardless of whether that tool
supports `@import`. The tradeoff: on Windows, creating a symlink requires
Administrator privileges or Developer Mode, so prefer the `@import` form there.
Use `@import` when a tool supports it and you want to add tool-specific notes
below the import; use a symlink when you want a pure mirror or the tool has no
import mechanism.

**First external import is gated.** The first time a tool encounters an external
import in a project, it may show a one-time approval dialog listing the files.
Declining disables those imports.

## What to keep out of the shared source

Tool-specific features break neutrality and belong in that tool's own files, not
in `context/`:

- Claude's path-scoped rules (`.claude/rules/` with `paths` frontmatter) are
  Claude-only. They are how Claude lazily loads instructions only when relevant
  files are touched.
- Going fully agnostic means giving up that lazy/path-scoped loading for the
  shared content: everything `index.md` imports loads every session. This is the
  main tradeoff to weigh. If a project is large enough that always-on loading
  becomes costly, consider keeping the truly universal facts in `context/` and
  letting each tool layer its own lazy-loading mechanism on top.

If you do want tool-specific guidance, add it *below* the import in that tool's
pointer file (e.g. a `## Claude Code` section under `@context/index.md`), so it
never leaks into the neutral source.

## Example pointer file

A minimal `CLAUDE.md` for this pattern:

```markdown
<!--
  This file is a thin pointer, not the source of truth.
  All project context lives in context/index.md (and the files it imports),
  so the same content can be shared across LLM tools without duplication.
  HTML comments like this are stripped before injection, so they cost no tokens.
-->

@context/index.md
```

## Setup checklist

1. Create the `context/` folder at the repo root and write `context/index.md`.
2. Add topic files and import them from `index.md` with bare-name `@` imports.
3. Move deep reference material into a subfolder `index.md` does not import.
4. Create a thin pointer at each tool's expected filename (import or symlink).
5. Add any tool-specific instructions below the import in that tool's pointer.

## Migration and verification

**Migrating existing configs.** Some tools can bootstrap from what you already
have. In Claude Code, running `/init` in a repo that already contains an
`AGENTS.md` reads it and folds the relevant parts into the generated
`CLAUDE.md`; it also reads other tool configs like `.cursorrules` and
`.windsurfrules`.

**Verifying what loaded.** In Claude Code, `/memory` lists every instruction
file and import currently loaded in the session — the fastest way to confirm
your neutral source actually made it into context. If a file you expected is
missing, check that the pointer is at a discovered path and that the relative
import resolves correctly from the importing file.

## Reference

Claude Code memory and imports: https://code.claude.com/docs/en/memory

Each tool's import/discovery behavior differs; confirm the specifics for any
non-Claude tool in its own documentation before relying on `@import` versus a
symlink.

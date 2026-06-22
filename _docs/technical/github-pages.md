# GitHub Pages Architecture

The main website code repository ([github.com/jmbn424/website](https://github.com/jmbn424/website)) drives and constitutes a 1:1 representation of the associated static website that GitHub automatically builds, deploys, and hosts through their free [GitHub Pages](https://docs.github.com/en/pages) system.

## Architecture

[GitHub Pages](https://docs.github.com/en/pages) uses [Jekyll](https://jekyllrb.com), a [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language))-based [Static Site Generator](https://en.wikipedia.org/wiki/Static_site_generator), to build and deploy changes to the website.

The system does not support the use databases. Data is stored in [YAML](https://en.wikipedia.org/wiki/YAML) format in flat [data files](https://jekyllrb.com/docs/datafiles/) and in [Front Matter](https://jekyllrb.com/docs/front-matter/) in [Liquid](https://shopify.github.io/liquid/) templates.

Real-time dynamic applications on GitHub Pages are only possible with services, such as with a [Jamstack](https://en.wikipedia.org/wiki/JavaScript_stack#JAMstack) architecture.

This back-end was chosen for its low cost, low latency, developer friendliness, and simple, maintainable, robust, secure, and high-performance infrastructure that is well suited for relatively simple, static splash pages like this one.

## Committing Changes

When changes are made to files that require a site rebuild, they usually take less than a couple of minutes to show up publicly once they have been committed to the repository. Build and deploy actions can be monitored on the [Actions](https://github.com/jmbn424/website/actions) page.

## Web Hosting

This site is currently deployed using GitHub Pages based on the latest valid state of this repository. While GitHub Pages functions in this case as a web host, it is distinct in a key way. By design, GitHub does not give users (even enterprise users) direct access to the servers that build and deploy their statically-generated websites.

Since there is no server to access, nothing can be installed. It's not possible to run a custom PHP/MySQL application on GitHub Pages for example. For that kind of real-time back-end driven website, another hosting and/or cloud services provider would be required.

For information about storage, bandwidth, rate limits, and restrictions, see [GitHub Pages Limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) on GitHub Docs.

---

[GitHub](https://en.wikipedia.org/wiki/GitHub) is a subsidiary of Microsoft.

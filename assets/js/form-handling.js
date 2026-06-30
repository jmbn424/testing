// Form-field initialization, loaded only on pages that render the lead form (currently the
// Contact page). Some browsers and password managers autofill the auxiliary "_Website" field;
// clear it on load so a genuine submission never carries a stray value. Kept in its own file
// (not inline) so the Content-Security-Policy can stay strict (script-src 'self').
document.addEventListener('DOMContentLoaded', () => {
    const webField = document.getElementById('field-website');
    if (webField) webField.value = '';
});

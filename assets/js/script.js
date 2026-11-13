const THEME_TOGGLE = document.getElementById('theme-toggle');
const THEME_ICON = document.getElementById('theme-icon');
const HTML = document.documentElement;

THEME_TOGGLE.addEventListener('click', function () {
    const ACTUAL_THEME = HTML.getAttribute('data-bs-theme');

    if (ACTUAL_THEME === 'light') {
        HTML.setAttribute('data-bs-theme', 'dark');
        THEME_ICON.className = 'fa-solid fa-sun';
    } else {
        HTML.setAttribute('data-bs-theme', 'light');
        THEME_ICON.className = 'fa-solid fa-moon';
    }
});

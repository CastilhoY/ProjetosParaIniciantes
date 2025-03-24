const darkMode = document.querySelector('.dark');
const themeStylesheet = document.getElementById('themeStylesheet');
const icon = document.getElementById('icon');

darkMode.addEventListener('click', toggleTheme);

function toggleTheme() {
    if (themeStylesheet.getAttribute('href') === '../css/light.css') {
        themeStylesheet.setAttribute('href', '../css/dark.css');
        icon.textContent = 'light_mode';  // Altera o ícone para o modo escuro
    } else {
        themeStylesheet.setAttribute('href', '../css/light.css');
        icon.textContent = 'dark_mode';  // Altera o ícone para o modo claro
    }
}
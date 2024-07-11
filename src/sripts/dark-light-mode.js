const root = document.documentElement;
const primaryColorLight = '#dee2e6';
const primaryColorDark = '#393E46';
const primaryColorLightBgOpacity = 'rgba(222, 226, 230, 0.65)';
const primaryColorDarkBgOpacity = 'rgba(57, 62, 70, 0.65)';
const ColorDarkBg = '#222831';
const ColorLightkBg = '#fff';
const ColorCyan = '#00ADB5';

export function darkLightMode() {
    const darkLightButton = document.querySelector('.dark-light-mode-button');

    const dataLocalStorage = localStorage.getItem('theme');

    if (dataLocalStorage == null) {
        localStorage.setItem('theme', 'light');
    } else {
        applyTheme(dataLocalStorage);
    }

    darkLightButton.addEventListener('click', () => {
        toggleTheme();
    });
}

function toggleTheme() {
    const dataLocalStorage = localStorage.getItem('theme');

    if (dataLocalStorage === 'light') {
        localStorage.setItem('theme', 'dark');
        applyTheme('dark');
    } else {
        localStorage.setItem('theme', 'light');
        applyTheme('light');
    }
}

function applyTheme(theme) {
    if (theme === 'dark') {
        root.style.setProperty('--primary-color', primaryColorLight);
        root.style.setProperty('--color-opacity-bg', primaryColorDarkBgOpacity);
        root.style.setProperty('--bg-color', ColorDarkBg);
        root.style.setProperty('--box-shadow-color', ColorCyan);

    } else {
        root.style.setProperty('--primary-color', primaryColorDark);
        root.style.setProperty('--color-opacity-bg', primaryColorLightBgOpacity);
        root.style.setProperty('--bg-color', ColorLightkBg);
        root.style.setProperty('--box-shadow-color', primaryColorDarkBgOpacity);
    }
}

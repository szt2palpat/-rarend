const darkModeToggle = document.getElementById("dark-mode-toggle");
const stylesheet = document.getElementById("stylesheet");
const darkStylesheet = document.getElementById("dark-stylesheet");

const isDarkMode = localStorage.getItem("darkMode") === "enabled";


if (isDarkMode) {
    enableDarkMode();
}


function enableDarkMode() {
    document.body.classList.add("dark-mode");
    stylesheet.disabled = true;
    darkStylesheet.disabled = false;
    localStorage.setItem("darkMode", "enabled");
    darkModeToggle.checked = true;
}


function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    stylesheet.disabled = false;
    darkStylesheet.disabled = true;
    localStorage.setItem("darkMode", "disabled");
    darkModeToggle.checked = false;
}


darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// Oldal színének beállítása Dark Mode esetén
function setSiteColors() {
    if (document.body.classList.contains("dark-mode")) {
        document.body.style.setProperty("--background-color", "#333"); // Sötét háttér
        document.body.style.setProperty("--text-color", "#fff"); // Fehér szöveg
        // További színváltozók itt
    } else {
        document.body.style.setProperty("--background-color", "#f4f4f4"); // Világos háttér
        document.body.style.setProperty("--text-color", "#000"); // Fekete szöveg
        // További színváltozók itt
    }
}


setSiteColors();

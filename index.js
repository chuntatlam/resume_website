const toggleBtn = document.getElementById("dark-mode-btn");
const element = document.body;
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  element.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "enabled");
}

const disableDarkMode = () => {
  element.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", "disabled");
}

if (darkMode === "enabled") {
  enableDarkMode();
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

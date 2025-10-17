function toggleCompetences() {

const compSection = document.getElementByClass('competences');

compSection.style.display =

compSection.style.display === 'none' ? 'block' : 'none';
  

}




function dark () {
 
  const root = document.documentElement;
 
  function toggleDarkMode() {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }
 
  function init() {
    const storedPreference = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = storedPreference || (systemPrefersDark ? "dark" : "light");
    root.setAttribute("data-theme", theme);
  }
 
  init();
 
  document.addEventListener("DOMContentLoaded", function () {
    const togglers = document.querySelectorAll("[data-theme-toggler]");
    togglers.forEach((toggler) => {
      toggler.addEventListener("click", toggleDarkMode);
    });
  });

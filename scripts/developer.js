const menuButton = document.querySelector("#ham-btn");
const navigationBar = document.querySelector("#nav-bar");
const today = new Date();
const currentYear = today.getFullYear();
const lastModified = document.querySelector("#lastModified");
document.querySelector("#currentYear").textContent = currentYear;
lastModified.textContent = document.lastModified;

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("show");
    navigationBar.classList.toggle("hide");
});



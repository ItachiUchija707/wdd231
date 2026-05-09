const menuButton = document.querySelector("#ham-btn");
const navigationBar = document.querySelector("#nav-bar");
const headerBorder = document.querySelector("header");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("show");
    navigationBar.classList.toggle("hide");
    headerBorder.classList.toggle("show-border");
});



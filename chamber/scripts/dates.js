const today = new Date();
const currentYear = today.getFullYear();
const lastModified = document.querySelector("#lastModified");
document.querySelector("#currentYear").textContent = currentYear;
lastModified.textContent = document.lastModified;
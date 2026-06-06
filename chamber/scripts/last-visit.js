const container = document.querySelector("#welcome");
const dayInMs = 86400000;
const welcomeMessage = document.createElement("p");

window.addEventListener("DOMContentLoaded", () => {
    const lastVisit = localStorage.getItem("last-visit");
    const today = Date.now();
    if (!lastVisit) {
        welcomeMessage.innerHTML = "";
        welcomeMessage.innerHTML = "Welcome! Let us know if you have any questions";
    }

    else if (lastVisit) {
        welcomeMessage.innerHTML = "";
        const timeSince = today - parseInt(lastVisit);
        if (timeSince < dayInMs) {
            welcomeMessage.innerHTML = "Back so soon! Awesome!";
        }
        else {
            const daysSince = Math.floor(timeSince / dayInMs);
            const daysText = daysSince === 1 ? "day" : "days";
            welcomeMessage.innerHTML = `You last visited ${daysSince} ${daysText} ago`;
        }
    }
    container.appendChild(welcomeMessage);
    localStorage.setItem("last-visit", today.toString());

})
window.addEventListener("DOMContentLoaded", () => {
    const formTime = document.querySelector("#timestamp");
    const now = new Date();

    if (formTime) {
        formTime.value = Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false}).format(now);
        }
    })


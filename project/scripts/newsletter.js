const submissionContainer = document.querySelector("#submission-details");
const formData = new URLSearchParams(window.location.search);

console.log(formData);

// capture and insert time into timestamp input element
window.addEventListener("DOMContentLoaded", () => {
    const displayForm = document.createElement("p");
    displayForm.innerHTML = 
    `
        <p><span class="information">Information Submitted:</span><br>
            <span>Name:</span> ${formData.get('fName')}<br>
            <span>Favorite Game Genres:</span> ${formData.getAll('genre').join(", ")}.<br>
            <span>Sign-up Timestamp:</span> ${formData.get('timestamp')}<br>
        </p>
    `;

    submissionContainer.appendChild(displayForm);
})
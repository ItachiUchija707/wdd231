const submissionContainer = document.querySelector("#submission-details");
const formData = new URLSearchParams(window.location.search);

// console.log(formData);

// capture and insert time into timestamp input element
window.addEventListener("DOMContentLoaded", () => {
    const displayForm = document.createElement("p");
    displayForm.innerHTML = 
    `
        <p><span class="information">Information Submitted:</span><br>
            <span>Full Name:</span> ${formData.get('fName')} ${formData.get('lName')}<br>
            <span>Email:</span> ${formData.get('email')}<br> <span>Mobile-number:</span> ${formData.get('phone-number')}<br>
            <span>Organization Name:</span> ${formData.get('businessName')}<br>
            <span>Application Timestamp:</span> ${formData.get('timestamp')}<br>
        </p>
    `;

    submissionContainer.appendChild(displayForm);
})

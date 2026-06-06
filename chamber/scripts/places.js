import { places } from "../data/places.mjs";

const sectionsContainer = document.querySelector("#places");
const dialogBox = document.querySelector("#place-details");

function createPlacesCards(placesArray) {
    sectionsContainer.innerHTML = "";
    placesArray.forEach(place => {

        const placeSection = document.createElement("section");
        placeSection.innerHTML =
            `
        <h2>${place.name}</h2>
        <figure>
            <img src="images/${place.imgPath}" alt="${place.imgAlt}" loading="lazy">
            <figcaption>${place.caption}</figcaption>
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        `;

        const learnMoreBtn = document.createElement("button");
        learnMoreBtn.setAttribute("class", "dLearn");
        learnMoreBtn.setAttribute("type", "button");
        learnMoreBtn.setAttribute("aria-label", "Learn More Button");
        learnMoreBtn.textContent = "Learn More";
        learnMoreBtn.addEventListener("click", () => displayDialog(place));
        placeSection.appendChild(learnMoreBtn);

        sectionsContainer.appendChild(placeSection);
    });

}

function displayDialog(place) {
    dialogBox.innerHTML =
        `
            <h3>${place.name}</h3>
            <p><span>Estimated Cost:</span><span class="estimated-cost"> $${place.estimatedCost}</span></p>
            <p><span>Entrance details:</span> ${place.entranceType}</p>
            <p><span>Best time to visit:</span> ${place.recommendedHours}</p>
            <p><span>Category:</span> ${place.category}</p>
            <button id="close-button">❌</button>
        `;
    dialogBox.showModal();
    const closeDialog = dialogBox.querySelector("#close-button");
    closeDialog.addEventListener("click", () => dialogBox.close());
}

createPlacesCards(places.places);


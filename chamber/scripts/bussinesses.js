const businessesData = "./data/members.json";
const businessesContainer = document.querySelector("#directory");

// button modifications
const gridDisplay = document.querySelector("#grid");
const listDisplay = document.querySelector("#list");



async function getBusinessesData() {
    const response = await fetch(businessesData);
    const data = await response.json();
    createBusinessCards(data.chamber_businesses);
}

const createBusinessCards = (businesses) => {
    businessesContainer.innerHTML = "";
    const businessesArray = businesses;
    businessesArray.forEach((business) => {
        const businessSection = document.createElement("section");
        businessSection.setAttribute("class", "business");

        // button modifications

        if (businessesContainer.classList == "directory") {
            businessSection.innerHTML =
                `
                <h2>${business.company_name}</h2>
                <img src="${business.image_extension}" alt="" width="200" height="150" loading="lazy">
                <span>${business.services_offered}</span>
                <address>${business.addresses.street} ${business.addresses.ward} ${business.addresses.city}<br>
                ${business.addresses.zip} ${business.addresses.state}<br>
                +504-${business.phone_number}
                </address>
                <a href="${business.url}">${business.url}</a>
                <p><a href="${business.google_maps_link}">Google Maps Location</a></p>
            `
            businessesContainer.appendChild(businessSection);
        }

        else if (businessesContainer.classList == "list") {
            businessSection.innerHTML =
                `
                <h2>${business.company_name}</h2>
                <span>${business.services_offered}</span>
                <address>${business.addresses.street} ${business.addresses.ward} ${business.addresses.city} 
                ${business.addresses.zip}
                </address>
                <a href="${business.url}">${business.url}</a>
            `
            businessesContainer.appendChild(businessSection);
        }
    });
}

getBusinessesData();
gridDisplay.addEventListener("click", () => {
    if (businessesContainer.classList == "directory") {
        businessesContainer.classList.remove("list");
        getBusinessesData();
    }

    else {
        businessesContainer.classList.add("directory");
        businessesContainer.classList.remove("list");
        getBusinessesData();
    }
})

listDisplay.addEventListener("click", () => {
    if (businessesContainer.classList == "list") {
        businessesContainer.classList.remove("directory");
        getBusinessesData();
    }

    else {
        businessesContainer.classList.add("list");
        businessesContainer.classList.remove("directory");
        getBusinessesData();
    }
})

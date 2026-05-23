const businessesData = "./data/members.json";
const businessesContainer = document.querySelector("#directory");

// button modifications
const gridDisplay = document.querySelector("#grid");
const listDisplay = document.querySelector("#list");

const page = document.querySelector(".current");

async function getBusinessesData() {
    try {
        const response = await fetch(businessesData);
        const data = await response.json();
        const businessArray = data.chamber_businesses;

        if (page.textContent == "Home") {
            const filteredBusinesses = businessArray.filter(business => business.membership_level.includes("silver") || business.membership_level.includes("gold"));
            const randomArray = [...filteredBusinesses].sort(() => 0.5 - Math.random());
            createBusinessCards(randomArray.slice(0, randomArray.length - 1))
            ;
        }

        else {
            createBusinessCards(businessArray);
        }
        
    }

    catch (error) {
        console.error("Error fetching directory data:", error);
    }
    
}

const createBusinessCards = (businesses) => {
    businessesContainer.innerHTML = "";
    const listView = businessesContainer.classList.contains("list");

    businesses.forEach((business) => {
        const businessSection = document.createElement("section");
        businessSection.setAttribute("class", "business");

        if (page.textContent == "Home") {
            businessSection.innerHTML =
                `
                <h2>${business.company_name}</h2>
                <img src="${business.image_extension}" alt="" width="200" height="150" loading="lazy" crossorigin="anonymous">
                <span>${business.services_offered}</span>
                <address>${business.addresses.street} ${business.addresses.ward}<br>
                ${business.addresses.city} ${business.addresses.zip} ${business.addresses.state}<br>
                +504-${business.phone_number}
                </address>
                <a href="${business.url}">${business.url}</a>
                <p><span>${business.membership_level} Member</span></p>
            `
            businessesContainer.appendChild(businessSection);
        }

        else {
            if (!listView) {
                businessSection.innerHTML =
                `
                <h2>${business.company_name}</h2>
                <img src="${business.image_extension}" alt="" width="200" height="150" loading="lazy" crossorigin="anonymous">
                <span>${business.services_offered}</span>
                <address>${business.addresses.street} ${business.addresses.ward}<br>
                ${business.addresses.city} ${business.addresses.zip} ${business.addresses.state}<br>
                +504-${business.phone_number}
                </address>
                <a href="${business.url}">${business.url}</a>
                <p><a href="${business.google_maps_link}">Google Maps Location</a></p>
            `
            businessesContainer.appendChild(businessSection);

            }

            else {
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
        }

    });
}


if (page.textContent == "Home") {
    getBusinessesData();
}

else {
    getBusinessesData();
    gridDisplay.addEventListener("click", () => {
    businessesContainer.classList.add("directory");
    businessesContainer.classList.remove("list");
    getBusinessesData();
})

listDisplay.addEventListener("click", () => {
    businessesContainer.classList.add("list");
    businessesContainer.classList.remove("directory");
    getBusinessesData();
})
}


const dialogBox = document.querySelector("#memberships");
const membershipsInfo = "./data/memberships.json";
const membershipContainer = document.querySelector("#membership-levels");

function displayMemberships(membershipsArray) {
    membershipContainer.innerHTML = "";
    const containerHeading = document.createElement("h2");
    containerHeading.innerHTML = "Membership Levels";
    membershipContainer.appendChild(containerHeading);

    membershipsArray.forEach(membership => {

        const sectionMembership = document.createElement("section");
        const sectionHeading = document.createElement("h3");
        const learnMore = document.createElement("a");
        learnMore.setAttribute("href", "#");

        sectionHeading.innerHTML = `${membership.level} Membership Level`;
        learnMore.innerHTML = `Learn More`;
        learnMore.addEventListener("click", () => createMembershipCards(membership));

        sectionMembership.appendChild(sectionHeading);
        sectionMembership.appendChild(learnMore);
        membershipContainer.appendChild(sectionMembership);
    });
}

function createMembershipCards(membership) {
    const benefits = membership.benefits.map(benefit => `<li>${benefit}</li>`).join("");
    dialogBox.innerHTML =
        `
            <h3>${membership.level} Membership Level</h3>
            <p><span>Annual Cost:</span><span class="annual-cost"> $${membership.cost}</span></p>
            <p><span>Core Focus:</span> ${membership.core}</p>
            <p><span>Description:</span> ${membership.description}</p>
            <ul><span>Included Benefits:</span>${benefits}</ul>
            <button id="close-button">❌</button>
    `;
    dialogBox.showModal();
    const closeDialog = document.querySelector("#close-button");
    closeDialog.addEventListener("click", () => dialogBox.close());
}

async function getMembershipsData() {
    try {
        const response = await fetch(membershipsInfo);
        const data = await response.json();
        console.log(data);
        displayMemberships(data.memberships);
    }

    catch (error) {
        console.log("Error fetching data:", error);
    }

}


getMembershipsData();


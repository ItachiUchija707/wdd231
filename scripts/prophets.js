const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets= (prophets) => {
    prophets.forEach(prophet => {
        const cardSection = document.createElement("section");
        cardSection.innerHTML =  
        `
            <h2>${prophet.name} ${prophet.lastname}</h2>
            <p>Date of Birth: ${prophet.birthdate}</p>
            <p>Place of Birth: ${prophet.birthplace}</p>
            <img src="${prophet.imageurl}" alt="${prophet.name} ${prophet.lastname}" loading="lazy" width="300" height="275">
        `
        cards.appendChild(cardSection);
    });
}

getProphetData();
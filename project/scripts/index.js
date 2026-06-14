import { pickedProducts } from "./display.js";
import { showProducts } from "./display.js";
import { displayMostPopular } from "./display.js";
import { displayData } from "./display.js";
import { videoGamesCollection } from "../data/games.mjs";
import { videoGameProducts } from "../data/products.mjs";
import { dialogBox } from "./display.js";


const myKey = "916d6d7dde41472a999a7ee295e73792";
const url = `https://api.rawg.io/api/games?key=${myKey}&dates=2026-01-01,2026-06-30&platforms=18,1,7&page_size=6`;

async function getData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        data.results.splice(4,1);
        showProducts(pickedProducts);
        displayMostPopular(data.results);
        displayData(videoGamesCollection.games);
    }

    catch (error) {
        console.log("Error fetching data:", error);
    }

}



window.addEventListener("DOMContentLoaded", () => {
    const mightBuy = localStorage.getItem("pSale");
    if (mightBuy) {
        dialogBox.innerHTML = "";
        const productOfInterest = videoGameProducts.products.filter(product => product.productName.includes(mightBuy));
        dialogBox.innerHTML = 
        `   <p class="last-time">Last time you were here you liked this product:</p>
            <h3>${productOfInterest[0].productName}</h3>
            <img src="${productOfInterest[0].imgUrl}" alt="${productOfInterest[0].imgAlt}" loading="lazy">
            <a class="buy-btn" aria-label="buy on retailer button" href="${productOfInterest[0].affiliateUrl}">$${productOfInterest[0].price}<br>${productOfInterest[0].buttonLabel}</a>
            <button class="close-button">X</button>
        `;
        const closeModalButton = document.querySelector(".close-button");
        closeModalButton.addEventListener("click", () => {dialogBox.close();});

        dialogBox.showModal();
        localStorage.removeItem("pSale");
    }
    
    getData();

})

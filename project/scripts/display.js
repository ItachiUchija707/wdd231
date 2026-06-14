import { videoGameProducts } from "../data/products.mjs";

// featured game selectors
const featuredContainer = document.querySelector("#featured-game");
export const dialogBox = document.querySelector("#dialogBox");

// Wiki page games container selector
const wikiGamesContainer = document.querySelector("#games-container");

// api games selectors
const mostPopularContainer = document.querySelector("#top-played");

// product selectors
const productsContainer = document.querySelector("#products");
const productsArray = videoGameProducts.products;

// randomize products array to display different products every time the page loads and only display 3
const randomizeProducts = [...productsArray].sort(() => 0.5 - Math.random());
export const pickedProducts = randomizeProducts.slice(0, -15);

// function to display feature game and its dialog box
export function displayData(data) {
    const randomGamesArray = [...data].sort(() => 0.5 - Math.random());
    const randomPick = randomGamesArray[0];
    
    featuredContainer.innerHTML = "";

    featuredContainer.innerHTML = 
    `
        <h2>${randomPick.name}</h2>
        <img src="${randomPick.imgUrl}" alt="game ${randomPick.imgAlt} screenshot" crossorigin="anonymous">
        <p>${randomPick.longDescription}</p>
        <button type="button" class="btn-details" aria-label="open game details button">More Details</button>
    `;
    const openDialog = document.querySelector(".btn-details");
    openDialog.addEventListener("click", () => createGameBoxes(randomPick));
    
}

// function to display dialog box content
export function createGameBoxes(game) {
    const platforms = game.platforms.map(platform => `${platform}`).join(", ");
    dialogBox.innerHTML =
        `
            <h3>${game.name}</h3>
            <p><span>Launch Date:</span> ${game.launchDate}</p>
            <p><span>Genre:</span> ${game.genre.charAt(0).toUpperCase() + game.genre.slice(1)}</p>
            <p><span>Description:</span> ${game.shortDescription}</p>
            <p><span>Copies Sold:</span> ${game.copiesSold}</p>
            <p><span>Game Score:</span><span class="green"> ${game.gameScore} by ${game.scoreSource}</span></p>
            <p><span>Developer:</span> ${game.developer}</p>
            <p><span>ESR Rating:</span> ${game.esrbRating}</p>
            <p><span>Platforms:</span> ${platforms}.</p>
            <button id="close-button">X</button>
    `;
    dialogBox.showModal();
    const closeDialog = document.querySelector("#close-button");
    closeDialog.addEventListener("click", () => dialogBox.close());
}

// function to display products / optimized to display them in both index and store page avoiding writing code for each page
export function showProducts(products) {
    const containerTitle = document.createElement("h2");
    containerTitle.textContent = "Gaming Products";
    productsContainer.appendChild(containerTitle);
    products.forEach((product) => {
        const productSection = document.createElement("section");
        const compatibleList = product.compatibility.map(device => `${device}`).join(", ");
        productSection.innerHTML = 
        `
            <h3>${product.productName}</h3>
            <span class="brand">${product.brand}</span>
            <img src="${product.imgUrl}" alt="${product.imgAlt}" loading="lazy" crossorigin="anonymous">
            <p> ${product.shortDescription}</p>
            <p><span>Compatible with: </span>${compatibleList}.</p>
            <a class="buy-btn" aria-label="buy on retailer button" href="${product.affiliateUrl}"><span class="pricing">$${product.price}</span><br>${product.buttonLabel}</a>
        `;
        // add event listener to buy button to save user product of interest with localstorage
        const buyButton = productSection.querySelector(".buy-btn");
        buyButton.addEventListener("click", () => {localStorage.setItem("pSale", product.productName)});
        productsContainer.appendChild(productSection);

    })

}

// function to display API most popular games data
export function displayMostPopular(gamesArray) {
    mostPopularContainer.innerHTML = "";
    const mostPopularTitle = document.createElement("h2");
    mostPopularTitle.innerText = "Most Popular 2026 Games";
    mostPopularContainer.appendChild(mostPopularTitle);

    gamesArray.forEach(game => {
        const opmitizedUrl = game.background_image.replace("media/games/", "media/crop/600/400/games/");
        const gameArticle = document.createElement("article");
        gameArticle.innerHTML =
        `
            <h3>${game.name}</h3>
            <div>
                <img src="${opmitizedUrl}" alt="${game.name} screenshot" loading="lazy" crossorigin="anonymous">
                <p>R: ${game.rating}</p>
            </div>
        `;

        mostPopularContainer.appendChild(gameArticle);
    })

};

export function displayGames(gamesArray) {
    
    gamesArray.forEach((game) => {
        const gamesArticle = document.createElement("article");
        gamesArticle.innerHTML = 
        `
            <h2>${game.name}</h2>
            <div>
                <img src="${game.imgUrl}" alt="${game.imgAlt} screenshot" loading="lazy" crossorigin="anonymous">
                <p><span>Metacritic:</span> ${game.gameScore}</p>
            </div>
        `;
        gamesArticle.addEventListener("click", () => {createGameBoxes(game)});
        wikiGamesContainer.appendChild(gamesArticle);
    });
}

import { videoGameProducts } from "../data/products.mjs";
import { showProducts } from "./display.js";

window.addEventListener("DOMContentLoaded", () => {
    showProducts(videoGameProducts.products);
})
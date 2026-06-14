import { displayGames } from "./display.js";
import { videoGamesCollection } from "../data/games.mjs";

window.addEventListener("DOMContentLoaded", () => {
    displayGames(videoGamesCollection.games);
})
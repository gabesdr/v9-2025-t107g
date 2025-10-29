import { searchFrom, displayArtwork } from "./lib/art.js";
import { el } from "./lib/elements.js";

const artSearcher = document.querySelector(".art-searcher");

const id = new URLSearchParams(window.location.search).get("id");

if (artSearcher instanceof HTMLElement) {
    if (id) {
        displayArtwork(artSearcher, id);
    } else {
        searchFrom(artSearcher);
    }
}
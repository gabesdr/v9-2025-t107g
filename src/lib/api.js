const API_URL = "https://api.artic.edu/api/v1/artworks/search";

/** @typedef {Object} SearchResults
 * @property {any} data
 */

// Search Method fyrir Search Functionality
/**
 * @param {string} query 
 * @returns {Promise<SearchResults | null>}
 */
export async function search(query) {
  const url = API_URL + '/?q=' + query;

  console.time("byrja kall í " + url);

  try {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('non 200 status')
    }

    const jsonResult = await response.json();

    console.time("kláraði kall");

    return jsonResult;
  } catch (err) {
    console.error("villa í fetch", err);
    return null
  }
}


// Getter Method fyrir Artwork by ID
/**
 * @param {string} id 
 * @returns {Promise<any>}
 */
export async function getArtworkById(id) {
    const url = `https://api.artic.edu/api/v1/artworks/${id}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('non 200 status')
        }
        const result = await response.json();
        return result;
    } catch (err) {
        console.error("villa í fetch", err);
        return null;
    }
}

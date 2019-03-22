export const  SEARCH_GIFS = "SEARCH_GIFS";

export const searchGifs = (term = null) => {
    console.log("Searched term", term)
    return {
        type: SEARCH_GIFS,
        term
    }
}
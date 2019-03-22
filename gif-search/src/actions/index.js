import axios from "axios";
import request from 'superagent';
//No need to hide API key; this is a public key
const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC';
export const  SEARCH_GIFS = "SEARCH_GIFS";

export function searchGifs(searchTerm = null) {
    console.log("Searched term", searchTerm)
    const data = request.get(`${API_URL}${searchTerm.replace(/\s/g, '+')}${API_KEY}`);
    console.log("Getting data", data)         
    return {
      type: SEARCH_GIFS,
      payload: data
    }
}
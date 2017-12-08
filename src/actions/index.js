import axios from 'axios';

const API_ID = 'a8b2f7e8';
const API_KEY = 'd55fb77abc7ae37ce88625d637e1b523';
const ROOT_URL = `https://api.edamam.com/search?appid=${API_ID}&app_key=${API_KEY}&from=0&to=50`;

export const FETCH_RECIPE = 'FETCH_RECIPE'

export function fetchRecipe(recipe) {
  const url = `${ROOT_URL}&q=${recipe}`;
  const request = axios.get(url);
  console.log(url);

  return {
    type: FETCH_RECIPE,
    payload: request
  }
}


// https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free"

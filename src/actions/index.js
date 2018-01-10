import axios from 'axios';

const API_ID = 'e0f03db0';
const API_KEY = '71eb7b5a82028669f3590af0bda65a23';
const ROOT_URL = `https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&from=0&to=50`;

const DJANGO_URL = 'http://localhost:8000/api'

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

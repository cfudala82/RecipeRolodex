import axios from 'axios';

const API_ID = 'e0f03db0';
const API_KEY = '71eb7b5a82028669f3590af0bda65a23';
export const ROOT_URL = `https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&from=0&to=50`;

const DJANGO_URL = 'http://localhost:8000/api'

export const FETCH_RECIPE = 'FETCH_RECIPE'

export function fetchRecipe(recipe) {
  const url = `${ROOT_URL}&q=${recipe}`;
  const request = axios.get(url);

  return {
    type: FETCH_RECIPE,
    payload: request
  }
}

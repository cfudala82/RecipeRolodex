import axios from 'axios';

const API_KEY = '';
const ROOT_URL = '';

export const FETCH_RECIPE = 'FETCH_RECIPE'

export function fetchRecipe(recipe) {
  const url = '';
  const request = axios.get(url);

  return {
    type: FETCH_RECIPE,
    payload: request
  }
}

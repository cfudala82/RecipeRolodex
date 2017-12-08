import { FETCH_RECIPE } from '../actions/index';

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_RECIPE:
      console.log(action.payload);
      return action.payload.data.hits;
  }
  return state;
}

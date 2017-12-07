import { FETCH_RECIPE } from '../actions/index';

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_RECIPE:
      return [ action.payload.data, ...state ];
  }
  return state;
}

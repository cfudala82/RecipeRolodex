import { combineReducers } from 'redux';
import RecipeReducer from './reducer_recipe';

const rootReducer = combineReducers({
  recipe: RecipeReducer
});

export default rootReducer;

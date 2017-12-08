import { combineReducers } from 'redux';
import RecipeReducer from './reducer_recipe';

const rootReducer = combineReducers({
  recipe_list: RecipeReducer
});

export default rootReducer;

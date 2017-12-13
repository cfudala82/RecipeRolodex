import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RecipeReducer from './reducer_recipe';

const rootReducer = combineReducers({
  recipe_list: RecipeReducer,
  form: formReducer
});

export default rootReducer;

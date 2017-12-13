import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { orange500 } from 'material-ui/styles/colors';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipe } from '../actions/index';

import RecipeSvg from '../images/cookie_recipe.jpg';

import database, {User} from '../components/fsociety';

class SaveRecipe extends  Component {

save () {
  database().ref('recipes/' + User.user.uid).push(
    {url: 'dhsfjsdhfj', notes: []}
  );

  // database().ref('/recipes/' + User.user.uid).once('value')
  //   .then(function(result) {
  //     var recipes = result.val();
  //      send redux action
  //   });
}

renderField(field) {
  return (
    <div className="form-group">
      <label>{field.label}</label>
      <input
        className="form-control"
        type="text"
        {...field.input}
      />
    </div>
  );
}

  render() {
    return(
      <div>
        <Paper
          zDepth={5}
          style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20}}
        >
          <img  src={RecipeSvg} alt="Breakfast Pizza" height="350" width="625" onClick={() => this.imgClick()} />
        </Paper>
        <Paper
          zDepth={5}
          style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 110, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto', marginBottom: 175, backgroundColor: '#EF6C00'}}
        >
          <form style={{color: '#FFE0B2'}}>
            <Field
              label="Title"
              name='title'
              component={this.renderField}
            />
            <Field
              label="Ingredients"
              name='ingredients'
              component={this.renderField}
            />
            <Field
              style={{}}
              label="Post Content"
              name='content'
              component={this.renderField}
            />
          </form>
        </Paper>
      </div>
    );

  }
}

function mapStateToProps({recipe_list}) {
  return {recipe_list};
}

// export default connect(null, mapStateToProps)(RecipeList);

export default reduxForm({
  form: 'PostNewForm'
})(SaveRecipe);

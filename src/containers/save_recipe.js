import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Field, reduxForm } from 'redux-form';

import RecipeSvg from '../images/cookie_recipe.jpg';

class SaveRecipe extends  Component {

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
          <img  src={RecipeSvg} alt="Breakfast Pizza" height="400" width="625" onClick={() => this.imgClick()} />
        </Paper>
        <Paper
          zDepth={5}
          style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20}}
        >
          <form>
            <Field
              label="Title"
              name='title'
              component={this.renderField}
            />
            <Field
              label="Categories"
              name='categories'
              component={this.renderField}
            />
            <Field
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

export default reduxForm({
  form: 'PostNewForm'
})(SaveRecipe);

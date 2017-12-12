import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Field, reduxForm } from 'redux-form';

import RecipeSvg from '../images/cookie_recipe.jpg';

class SaveRecipe extends  Component {
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
            <input />
          </form>
        </Paper>
      </div>
    );

  }
}

export default SaveRecipe;

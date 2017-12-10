import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Paper from 'material-ui/Paper';

import RecipeSvg from '../images/cookie_recipe.jpg';


class ViewRecipe extends Component {
  imgClick() {
    console.log('image clicked');
  }

  render() {
    return(
      <div>
        <Paper
          zDepth={5}
          style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20, maxWidth: 625, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20}}
        >
          <img  src={RecipeSvg} alt="Breakfast Pizza" height="400" width="625" onClick={() => this.imgClick()} />
        </Paper>
      </div>
    );
  }
}

export default ViewRecipe;

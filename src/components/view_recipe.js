import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Paper from 'material-ui/Paper';


class ViewRecipe extends Component {
  imgClick() {
    console.log('image clicked');
  }

  render() {
    return(
      <div style={{display: 'flex', flexWrap: 'nonwrap', justifyContent: 'center', margin: 20}}>
        <Paper
          zDepth={2}
        >
        <GridList
          cols={1}
          cellHeight={340}
          padding={1}
        >
        <GridTile
          key="https://www.edamam.com/web-img/2cc/2cc78c72b75b0c31f6f2bbe6060acf24.jpg"
          title='Breakfast Pizza'
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img  src="https://www.edamam.com/web-img/2cc/2cc78c72b75b0c31f6f2bbe6060acf24.jpg"  alt="Breakfast Pizza" onClick={() => this.imgClick()} />
        </GridTile>
        </GridList>
      </Paper>
      </div>
    );
  }
}

export default ViewRecipe;

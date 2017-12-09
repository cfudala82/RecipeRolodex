import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {deepOrangeA700} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto'
  },
};


class RecipeList extends Component {
  recipe_list () {
    if (this.props.recipe_list.length == 0) {
      return (
        <div></div>
      )
    }

    return this.props.recipe_list.map((r) => {
      return (
        <GridTile
          key={r.recipe.uri}
          title={r.recipe.label}
          subtitle={<span>from <b>{r.recipe.source}</b></span>}
          onClick={() => {console.log(r.recipe.url)}}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={r.recipe.image} alt={r.recipe.label}/>
        </GridTile>
      )
    });
  }

  render() {
    return(
        <div style={styles.root}>
        <Paper
          zDepth={2}
          >
          <GridList
            cellHeight={180}
            style={styles.gridList}
          >
            {this.recipe_list()}
          </GridList>
    </Paper>
  </div>
    );
  }
};

function mapStateToProps({recipe_list}) {
  return {recipe_list};
}

export default connect(mapStateToProps)(RecipeList);

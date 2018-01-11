import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipe } from '../actions/index';

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Paper from 'material-ui/Paper';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 30,
    margin: 30
  },
  gridList: {
    maxWidth: 500,
    maxHeight: 735,
    overflowY: 'auto'
  },
};


class RecipeList extends Component {
  constructor(props) {
    super(props);
  }

  imgClick(RecipeURL) {
    var id = RecipeURL.split('#')[1];
    this.props.history.push('/recipe/' + id);
  }

  recipe_list () {
    const initialRecipe = 'st';

    if (this.props.recipe_list.length === 0) {
        this.props.fetchRecipe(initialRecipe);
    }

    return this.props.recipe_list.map((r) => {
      return (
        <GridTile
          key={r.recipe.uri}
          title={r.recipe.label}
          subtitle={<span>from <b>{r.recipe.source}</b></span>}
          onClick={() => this.imgClick(r.recipe.uri)}
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
          zDepth={5}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRecipe }, dispatch);
}

function mapStateToProps({recipe_list}) {
  return {recipe_list};
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);

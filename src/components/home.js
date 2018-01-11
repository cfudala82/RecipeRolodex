import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import RecipeList from '../components/recipe_list';

class Home extends Component {
  render() {
    return(
      <div>
        <SearchBar />
        <RecipeList history={this.props.history}/>
      </div>

    );
  }
}

export default Home;

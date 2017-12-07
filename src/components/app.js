import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from '../components/nav_bar';
import SearchBar from '../containers/search_bar';

class App extends Component {
  render() {
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <NavBar />
            <SearchBar />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

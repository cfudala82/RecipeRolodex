import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {  orange800, orange900, yellow500, grey100, grey300, grey400, grey500, white, darkBlack, fullBlack, orange100} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import backgroundImage from '../images/spices.jpg';

import NavBar from '../components/nav_bar';
import SearchBar from '../containers/search_bar';
import RecipeList from '../components/recipe_list';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange800,
    primary2Color: orange900,
    primary3Color: grey400,
    accent1Color: yellow500,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: orange100,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: orange800,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  },
});

class App extends Component {
  render() {
    return(
      <div>
        <MuiThemeProvider
          muiTheme={muiTheme}
        >
          <div style={{ backgroundSize: 'cover',
            overflow: 'hidden',
            backgroundImage: "url(" + backgroundImage + ")"
          }}>
            <NavBar />
            <SearchBar />

            <RecipeList />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

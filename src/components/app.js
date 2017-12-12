import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import backgroundImage from '../images/spices.jpg';
import Home from './home';
import NavBar from '../components/nav_bar';
import SaveRecipe from '../containers/save_recipe'

class App extends Component {
  render() {
    return(
      <div style={{ backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundImage: "url(" + backgroundImage + ")"
      }}>
          <NavBar />
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/saverecipe" component={SaveRecipe} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;

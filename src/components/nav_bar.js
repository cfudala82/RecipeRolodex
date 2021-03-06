import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import {Link} from 'react-router-dom';

import {auth} from './fsociety';

const MenuBar = () => {
  return (
    <IconMenu iconButtonElement={<IconButton iconStyle={{color: "#FFE0B2"}}><NavigationMenu /></IconButton>}>
      <MenuItem>
        <Link to="/">Home</Link>
      </MenuItem>
      <MenuItem><Link to="/saverecipe">My Recipes</Link></MenuItem>
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  )
}



class NavBar extends Component {
  login () {
    auth()
      .then(function (user) {
        console.log(user);
      })
      .catch(function (e) {
        console.log(e);
      });
  }

  render() {
    return (
      <div style={{margin: 30}}>
        <Paper
          zDepth={5}
        >
          <AppBar
            title="Recipe Rolodex"
            iconElementLeft={<MenuBar/>}
            iconElementRight={<FlatButton label="Login" onClick={(e) => this.login()}/>}
            />
        </Paper>
      </div>
    );
  }
}

export default NavBar;

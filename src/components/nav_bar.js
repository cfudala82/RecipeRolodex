import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import {Link} from 'react-router-dom';

const MenuBar = () => {
  return (
    <IconMenu iconButtonElement={<IconButton iconStyle={{color: "white"}}><NavigationMenu /></IconButton>}>
      <MenuItem>
        <Link to="/">Home</Link>
      </MenuItem>
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  )
}

class NavBar extends Component {
  render() {
    return (
      <div style={{margin: 30}}>
        <Paper
          zDepth={5}
        >
          <AppBar
            title="Recipe Rolodex"
            iconElementLeft={<MenuBar/>}
            iconElementRight={<FlatButton label="My Recipes" />}
            />
        </Paper>
      </div>
    );
  }
}

export default NavBar;

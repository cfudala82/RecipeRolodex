import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);


Logged.muiName = 'IconMenu';



class NavBar extends Component {
  render() {



    return (
      <div style={{margin: 30}}>
        <Paper
          zDepth={5}
        >
          <AppBar
            title="Recipe Rolodex"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          />
        </Paper>
      </div>
    );
  }
}

export default NavBar;

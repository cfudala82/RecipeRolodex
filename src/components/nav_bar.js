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
    <IconMenu iconButtonElement={<IconButton iconStyle={{color: "#FFE0B2"}}><NavigationMenu /></IconButton>}>
      <MenuItem>
        <Link to="/">Home</Link>
      </MenuItem>
      <MenuItem><Link to="/saverecipe">My Recipes</Link></MenuItem>
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  )
}

// login () {
//   auth()
//     .then(function (user) {
//       console.log(user);
//     })
//     .catch(function (e) {
//       console.log(e);
//     });
// }

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
            iconElementRight={<FlatButton label="Login" />}
            />
        </Paper>
      </div>
    );
  }
}

export default NavBar;

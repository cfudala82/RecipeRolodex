import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

class NavBar extends Component {
  render() {
    return (
      <Paper
        zDepth={2}
      >
        <AppBar
          title="Recipe Rolodex"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </Paper>
    );
  }
}

export default NavBar;

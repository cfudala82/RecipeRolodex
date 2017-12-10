import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

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
          />
        </Paper>
      </div>
    );
  }
}

export default NavBar;

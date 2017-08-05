import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

const barStyle = {
  flex: '0 0 auto'
};

class Header extends Component {
  render() {
    return (
      <AppBar style={barStyle}
              title="Goalie" />
    );
  }
}

module.exports = Header;

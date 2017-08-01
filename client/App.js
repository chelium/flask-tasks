import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const appStyle = {
  fontFamily: 'Roboto'
};

const textStyle = {
  fontFamily: 'Raleway'
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="col-md-6 col-md-offset-3">
            <div className="App-header">
              <h2 style={appStyle}>Goalie</h2>
            </div>
            <p style={textStyle}>
              Testing fonts!
            </p>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

module.exports = App;

import React, { Component } from 'react';
import Header from './Header';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
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
            <Header />
            {/*<!-- Side Panel -->
            <!-- Content -->*/}
            <Paper style={textStyle}>
              Testing fonts!
            </Paper>
            {/*<!-- Footer -->*/}
            <FloatingActionButton>
              <ContentAdd />
            </FloatingActionButton>
        </div>
      </MuiThemeProvider>
    );
  }
}

module.exports = App;

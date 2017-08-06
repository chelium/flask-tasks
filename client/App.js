import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import SidePanel from './SidePanel';
import Content from './Content';
import Footer from './Footer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '@material/layout-grid/dist/mdc.layout-grid.min.css';
import '@material/tabs/dist/mdc.tabs.min.css';

const appStyle = {
  fontFamily: 'Roboto'
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Content />
          <Footer />
          <SidePanel />
          <FloatingActionButton>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </MuiThemeProvider>
    );
  }
}

module.exports = App;

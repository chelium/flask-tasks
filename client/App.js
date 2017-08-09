import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Header';
import SidePanel from './SidePanel';
import Content from './Content';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import NotFound from './NotFound';
import '@material/layout-grid/dist/mdc.layout-grid.min.css';
import '@material/tabs/dist/mdc.tabs.min.css';
import '@material/tabs/dist/mdc.tabs.min.js';
import './style.scss';

const appStyle = {
  fontFamily: 'Roboto'
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
          <Route exact path="/" component={Content}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
          <SidePanel />
        </div>
      </Router>
    );
  }
}

module.exports = App;

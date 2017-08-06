import React, { Component } from 'react';
import '@material/toolbar/dist/mdc.toolbar.min.css';

const barStyle = {
  flex: '0 0 auto'
};

class Header extends Component {
  render() {
    return (
      <header className="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall">
        <div className="mdc-toolbar__row">
          <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
            <a href="#" className="material-icons mdc-toolbar__icon--menu">menu</a>
            <span className="mdc-toolbar__title">Goalie</span>
          </section>
          <section className="mdc-toolbal__section mdc-toolbar__section--align-end">
            <nav className="mdc-tab-bar">
              <a className="mdc-tab" href="#">Signup</a>
              <a className="mdc-tab" href="#">Login</a>
            </nav>
          </section>
        </div>
      </header>
    );
  }
}

module.exports = Header;

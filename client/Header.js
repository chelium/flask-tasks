import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '@material/toolbar/dist/mdc.toolbar.min.css';

class Header extends Component {
  render() {
    return (
      <header className="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall">
        <div className="mdc-toolbar__row">
          <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
            <a href="#" className="material-icons mdc-toolbar__icon--menu">menu</a>
            <Link className="mdc-toolbar__title-link" to="/">
              <h1 className="mdc-toobar__title mdc-toolbar__title--full">
                Goalie
              </h1>
            </Link>
          </section>
          <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
            <nav className="mdc-tab-bar">
              <Link className="mdc-tab" to="/signup">Signup</Link>
              <Link className="mdc-tab" to="/login">Login</Link>
            </nav>
          </section>
        </div>
      </header>
    );
  }
}

module.exports = Header;

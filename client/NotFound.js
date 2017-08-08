import React, { Component } from 'react';

const textStyle = {
  fontFamily: 'Raleway'
};

class NotFound extends Component {
  render () {
    return (
        <main className="mdc-toolbar-fixed-adjust">
          <div className="mdc-layout-grid" style={textStyle}>
            <div className="mdc-layout-grid__inner">
              <div className="mdc-layout-grid__cell--span-2">
              </div>
              <div className="mdc-layout-grid__cell--span-8">
                <h1>404 Error</h1>
                <p>The page you are looking for does not exist.</p>
              </div>
              <div className="mdc-layout-grid__cell--span-2">
              </div>
            </div>
          </div>
        </main>
    );
  }
}

module.exports = NotFound;

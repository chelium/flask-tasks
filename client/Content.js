import React, { Component } from 'react';

const textStyle = {
  fontFamily: 'Raleway'
};

class Content extends Component {
  render() {
    return (
      <main className="mdc-toolbar-fixed-adjust">
        <div className="mdc-layout-grid" style={textStyle}>
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-2">
            </div>
            <div className="mdc-layout-grid__cell--span-8">
              <h1>Lorem Ipsum</h1>
              <p>Testing fonts!</p>
            </div>
            <div className="mdc-layout-grid__cell--span-2">
            </div>
          </div>
        </div>
      </main>
    );
  }
};

module.exports = Content;

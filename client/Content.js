import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const textStyle = {
  fontFamily: 'Raleway'
};

class Content extends Component {
  render() {
    return (
      <div className="mdc-layout-grid" style={textStyle}>
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-2">
          </div>
          <div className="mdc-layout-grid__cell--span-8">
            Testing fonts!
          </div>
          <div className="mdc-layout-grid__cell--span-2">
          </div>
        </div>
      </div>
    );
  }
};

module.exports = Content;

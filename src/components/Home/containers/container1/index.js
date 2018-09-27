import React, { Component } from 'react';
import Header from "../../Header";
import './index.css';

class Container1 extends Component {
  render() {
    return <div className="Container1">
        <Header />
        <div id="parent" className="bg">
          <div className="leftCol">
            <div className="title" style={{ fontSize: "4vw" }}>
            <p className="text">Find your sweet spot.</p>
            </div>
          </div>
          <div className="rightCol"></div>
        </div>;
      </div>;
  }
}

export default Container1;

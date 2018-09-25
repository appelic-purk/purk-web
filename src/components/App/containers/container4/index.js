import React, { Component } from "react";
import "./index.css";

class Container4 extends Component {
  render() {
    return <div id="parent" className="Container4">
        <div className="title">
          <div className="container4_title">
            <p>
              <u>How it works</u>: Renting A Spot
            </p>
          </div>
        </div>
        <div className="container4_content">
          <p>
            With Purk, you can reserve parking ahead of time, find a spot in
            minutes, and avoid paying confusing, inflated prices
          </p>
        </div>
        <div className="container4_content">
          <p>Choose from the map pins or search an address</p>
        </div>
        <div className="container4_content">
          <p>Indicate the amount of time you'd like to park for</p>
        </div>
        <div className="container4_content">
          <p>
            Search through the spots available by distance, price, and
            amenities
          </p>
        </div>
      </div>;
  }
}

export default Container4;

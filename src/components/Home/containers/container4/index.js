import React, { Component } from "react";
import flag from './../../../../images/icons/maps-and-flags.png';
import timer from './../../../../images/icons/timer-salmon.png';
import binoculars from './../../../../images/icons/binoculars.png';
import "./index.css";

class Container4 extends Component {
  render() {
    return <div className="Container4">
        <div className="col1">
          <div className="title">
            <div className="container4_title">
              <p>
                <u>How it works</u>: Renting A Spot
              </p>
            </div>
          </div>
          <div className="container4_content">
            <div className="row_title">
              <p>
                With Purk, you can reserve parking ahead of time, find a
                spot in minutes, and avoid paying confusing, inflated prices
              </p>
            </div>
            <div className="row" style={{ textAlign: "left" }}>
              <img className="img" src={flag} />
              <p>Choose from the map pins or search an address</p>
            </div>
            <div className="row">
              <img className="img" src={timer} />
              <p>Indicate the amount of time you'd like to park for</p>
            </div>
            <div className="row">
              <img className="img" src={binoculars} />
              <p>
                Search through the spots available by distance, price, and
                amenities
              </p>
            </div>
          </div>
        </div>
        <div className="col2">
          <p></p>
        </div>
      </div>;
  }
}

export default Container4;

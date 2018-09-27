import React, { Component } from "react";
import Moneybag from './../../../../images/icons/money-bag-salmon.png';
import Home from './../../../../images/icons/home.png';
import Calendar from './../../../../images/icons/calendar.png';
import ParkingSign from './../../../../images/icons/parking-sign.png';
import "./index.css";

class Container5 extends Component {
  render() {
    return <div className="Container5">
        <div className="col1">
          <p></p>
        </div>
        <div className="col2">
          <div className="title">
            <div className="container5_title">
              <p>
                <u>How it works</u>: Listing A spot
              </p>
            </div>
          </div>
          <div className="container5_content">
            <div className="row_title">
              <p>
                Have an empty parking spot? Why not make some money out of
                it? Purk allows you to easily and quickly list your spot,
                have complete control over rates and availability, and earn
                extra money without any hassle.
              </p>
            </div>
            <div className="row" style={{ textAlign: "left" }}>
              <img className="img" src={Home} />
              <p>Search your address</p>
            </div>
            <div className="row">
              <img className="img" src={ParkingSign} />
              <p>
                Select your type of space, number of spaces available, and
                amenities included
              </p>
            </div>
            <div className="row">
              <img className="img" src={Moneybag} />
              <p>Set your rates</p>
            </div>
            <div className="row">
              <img className="img" src={Calendar} />
              <p>Choose your available parking schedule</p>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Container5;

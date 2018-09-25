import React, { Component } from "react";
import "./index.css";

class Container5 extends Component {
  render() {
    return <div id="parent" className="Container5">
        <div className="title">
          <div className="container5_title">
            <p>
              <u>How it works</u>: Listing A Spot
            </p>
          </div>
        </div>
        <div className="container5_content">
          <p>
            Have an empty parking spot? Why not make some money out of it?
            Purk allows you to easily and quickly list your spot, have
            complete control over rates and availability, and earn extra
            money without any hassle.
          </p>
        </div>
        <div className="container5_content">
        <p>Search your address</p>
        </div>
        <div className="container5_content">
          <p>Select your type of space, number of spaces available, and amenities included</p>
        </div>
        <div className="container5_content">
          <p>Set your rates</p>
        </div>
        <div className="container5_content">
          <p>Choose your available parking schedule</p>
        </div>
      </div>;
  }
}

export default Container5;

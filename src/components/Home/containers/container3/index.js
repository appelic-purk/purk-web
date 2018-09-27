import React, { Component } from 'react';
import Button from "@material-ui/core/Button";  
import OurVision from "./../../../../images/icons/lightbulb-border.png";
import ParkSmarter from "./../../../../images/icons/park-border.png";
import './index.css';

class Container3 extends Component {
    render() {
        return <div id="parent" className="Container3">
            <div className="row1">
              <div className="title">
                <div className="container3_title">
                  <p>It's time to say goodbye to stressful parking</p>
                </div>
              </div>
            </div>
            <div className="row2">
            <div className="container3_content">
              <div className="row" style={{ textAlign: "left" }}>
                <img src={ParkSmarter} />
                <div>
                  <div className="title">Park Smarter</div>
                  <p>
                    There’s two types of people in this world: those who
                    need parking, and those who have it. Purk is a
                    community-based parking app that facilitates
                    communication between the two. With Purk, you can
                    effortlessly make money off of your unused parking
                    spot. Whether you’re going to an event, traveling,
                    or just tired of fighting for a spot, Purk finds you
                    parking — without the time and stress. Listing a
                    spot on Purk is easy, and renting one is even
                    easier.
                  </p>
                </div>
              </div>
              <div className="row" style={{ textAlign: "left" }}>
                <img src={OurVision} />
                <div>
                  <div className="title">Our Vision</div>
                  <p>
                    Our mission is to make parking inexpensive and
                    accessible to everyone. We want to make it easy for
                    people to travel anywhere and everywhere, in the
                    comfort of their own car. Most importantly, we want
                    the parking issue to be solved efficiently through
                    ordinary people helping each other.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>;
    }
}

export default Container3;

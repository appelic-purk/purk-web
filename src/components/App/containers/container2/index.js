import React, { Component } from 'react';
import timer from "./../../../../images/icons/timer-salmon.png";
import moneybag from "./../../../../images/icons/money-bag-salmon.png";
import charging from "./../../../../images/icons/charging.png";
import './index.css';

class Container2 extends Component {
    render() {
        return <div id="parent" className="Container2">
            <div className="container2_title">
              <div className="title">
                <p>Parking — A Problem Worth Solving</p>
              </div>
            </div>
            <div className="container2_content">
              <div className="rows" style={{ textAlign: "left" }}>
                <div className="row">
                  <div>
                    <img className="img" src={timer} style={{ float: "left" }} />
                  </div>
                  <div>
                    <p>
                      An average person in the U.S. spends about
                      <span className="purk-color">
                        {" "}
                        17 hours per year
                      </span>
                      searching for parking. In metropolitan areas like Los Angeles, this number goes up to
                      <span className="purk-color">
                        {" "}
                        85 hours per year
                      </span>.
                    </p>
                    <p>
                      Additionally, it takes
                      <span className="purk-color">
                        {" "}
                        15–32 minutes per trip{" "}
                      </span>
                      to find a parking spot.
                    </p>
                  </div>
                </div>
                <div className="row" style={{ textAlign: "right" }}>
                  <div>
                    <img className="img" src={charging} style={{ float: "right" }} />
                  </div>
                  <div>
                    <p>
                      <span className="purk-color">63% </span>
                      of Americans reported that they avoided driving to a destination due to parking.
                    </p>
                    <p>
                      Parking accounts for
                      <span className="purk-color">
                        {" "}
                        30% of traffic
                      </span>, produces
                      <span className="purk-color">
                        {" "}
                        2.5M tons of harmful emissions{" "}
                      </span>, and wastes
                      <span className="purk-color">
                        {" "}
                        260M gallons of gas
                      </span>.
                    </p>
                  </div>
                </div>
                <div className="row" style={{ textAlign: "left" }}>
                  <img className="img"src={moneybag} style={{ float: "left" }} />
                  <p>
                    Overpaying for parking costs the U.S.
                    <span className="purk-color">
                      {" "}
                      20B annually
                    </span>. In the top 10 busiest cities in America, this averages out to
                    <span className="purk-color">
                      {" "}
                      $1205 per driver per year.
                    </span>
                  </p>
                  <p>
                    In cities like Los Angeles, it costs about
                    <span className="purk-color"> $200 per </span>
                    month for long term parking, and about
                    <span className="purk-color">
                      {" "}
                      $14 for two-hour{" "}
                    </span>
                    parking.
                  </p>
                </div>
              </div>
            </div>
          </div>;
    }
}

export default Container2;

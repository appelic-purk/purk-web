import React, { Component } from 'react';
import BarGraph from "./../../../../images/icons/bar-graph.png";
import Camper from "./../../../../images/icons/camper.png";
import Internet from "./../../../../images/icons/internet.png";
import "./index.css";

class Container6 extends Component {
  render() {
    return <div className="Container6">
        <div className="row1">
          <div className="title">
            <div className="container6_title">
              <p>Let's revolutionize parking</p>
            </div>
          </div>
          <p>
            Join us in building communities, saving our environment, and
            solving an issue that has plagued our cities for decades
          </p>
        </div>
        <div className="row2">
          <div className="col">
            <img className="img" src={BarGraph} />
            <p>Reduce harmful emissions and save gasoline</p>
          </div>
          <div className="col">
            <img className="img" src={Camper} />
            <p>Scale down traffic</p>
          </div>
          <div className="col">
            <img className="img" src={Internet} />
            <p>
              Be a part of a community of people who want to help each other
            </p>
          </div>
        </div>
      </div>;
  }
}

export default Container6;
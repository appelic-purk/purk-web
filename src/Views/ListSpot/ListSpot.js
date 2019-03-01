import React, { Component } from "react";
import Sidebar from "./../../components/Sidebar/index";
import ListSpot from "./../../components/ListSpot/index";

class ListSpotView extends Component {
  render() {
    return <div className="ListSpotView">
      <div>
        <Sidebar />
      </div>
      <div className="main">
        <ListSpot />
      </div>
    </div>
  }
}

export default ListSpotView;
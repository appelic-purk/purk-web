import React, { Component } from "react";
import { GoogleApiWrapper, Map } from 'google-maps-react';
// import Map from "./Map/index";

export class MapContainer extends Component {
  render() {
    const style = { maxWidth: "100vw", maxHeight: "100vh", marginLeft: "64px" };
    return <div>
        <Map google={this.props.google} style={style} zoom={15} />
      </div>;
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);

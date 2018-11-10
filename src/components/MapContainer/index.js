import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    let { center, address } = this.props;
    return <div>
      <Map
        google={this.props.google}
        zoom={15}
        containerStyle={{ width: '100%', height: '100vh', position: 'relative' }}
        center={center}>
          <Marker
            title={address}
            name={address}
            position={center} />
        </Map>
      </div>;
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);

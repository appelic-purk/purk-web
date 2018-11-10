import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { insertMarkers } from "./../../Controllers/MapContainer/mapContainerController";

export class MapContainer extends Component {
  render() {
    let { center, centerAddress, addresses } = this.props;
    return <div>
      <Map
        google={this.props.google}
        zoom={15}
        containerStyle={{ width: '100%', height: '100vh', position: 'relative' }}
        center={center}>
          <Marker
            title={centerAddress}
            name={centerAddress}
            position={center} />
          {addresses.map((address) => {
            return(
              <Marker
              key={address.name}
              title={address.label}
              name={address.name}
              position={address.coordinates}
              />
            )} 
          )}
        </Map>
      </div>;
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);

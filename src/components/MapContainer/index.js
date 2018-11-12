import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker , InfoWindow} from 'google-maps-react';

export class MapContainer extends Component {
  onMarkerClick = (address) => {
    this.props.onMarkerClick(address)
  }
  render() {
    let { center, centerAddress, addresses, activeMarker } = this.props;
    let defaultIcon = {
      url: 'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|0091ff|40|_|%E2%80%A2', // url
      scaledSize: new this.props.google.maps.Size(20, 30), // scaled size
    };

    let highlightedIcon = {
      url: 'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|FFFF24|40|_|%E2%80%A2', // url
      scaledSize: new this.props.google.maps.Size(20, 30), // scaled size
    };
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
              onClick={(e)=>{this.onMarkerClick(address)}}
              icon={activeMarker === address ? highlightedIcon : defaultIcon}
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

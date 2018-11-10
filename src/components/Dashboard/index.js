import React, { Component } from 'react';
import { signOutUser, checkUserCredentials, testAddresses } from "./../../Controllers/Dashboard/dashboardController";
import { withStyles } from "@material-ui/core/styles";
import MapContainer from '../MapContainer';
import SearchBar from "material-ui-search-bar";
import Geocode from "react-geocode";
import styles from "./styles.js";
import SearchResult from './SearchResult';
import GeoLib from "geolib";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

class Dashboard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      center: { lat: 37.77, lng: 122.41 },
      addresses: []
    }
  }
  
  componentDidMount() {
    checkUserCredentials();
  }
  
  handleSearchRequest = (address) => {
    let coordinates = {};
    Geocode.fromAddress(address).then(response => {
      const { lat, lng } = response.results[0].geometry.location;
      coordinates["lat"] = lat;
      coordinates["lng"] = lng;
      this.setState({ centerAddress: address, center: coordinates });
          this.setState({ centerAddress: address, center: coordinates }, () => {
          let nearByAddresses = [];
          testAddresses.map(address => {
            let coordinates = { latitude: address.coordinates.lat, longitude: address.coordinates.lng }
            address.key = address.name;
            if (GeoLib.getDistance(coordinates, this.state.center) < 4800) {
              nearByAddresses.push(address);
            }
          });
          this.setState({ addresses: nearByAddresses })
        }
      );
    }, error => {
      coordinates = false;
      this.setState({ centerAddress: address, center: coordinates })
    });
  }

  render() {
    let { center, centerAddress, addresses } = this.state;
    let { classes } = this.props;
    return <div className={classes.root}>
        <div className={classes.column}>
          <SearchBar onRequestSearch={this.handleSearchRequest} placeholder={'Try "Westwood"'} className={classes.searchBar} />
          <SearchResult addresses={addresses} />
            <button onClick={() => { signOutUser() }}>
              sign out
            </button>
        </div>
        <div className={classes.column}>
          <MapContainer centerAddress={centerAddress} center={center} className={classes.mapContainer} addresses={addresses} />
        </div>
      </div>;
  }
}

export default withStyles(styles)(Dashboard);

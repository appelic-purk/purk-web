import React, { Component } from 'react';
import { signOutUser, checkUserCredentials } from "./../../Controllers/Dashboard/dashboardController";
import { withStyles } from "@material-ui/core/styles";
import MapContainer from '../MapContainer';
import SearchBar from "material-ui-search-bar";
import Geocode from "react-geocode";
import styles from "./styles.js";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

class Dashboard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      center: { lat: 37.77, lng: 122.41}
    }
  }
  
  componentWillMount() {
    checkUserCredentials();
  }
  
  handleSearchRequest = (address) => {
    let coordinates = {};
    Geocode.fromAddress(address).then(response => {
      const { lat, lng } = response.results[0].geometry.location;
      coordinates["lat"] = lat;
      coordinates["lng"] = lng;
      console.log(coordinates);
      this.setState({ address: address, center: coordinates })
    }, error => {
      coordinates = false;
      this.setState({ address: address, center: coordinates })
    });
  }

  render() {
    let { center, address } = this.state;
    let { classes } = this.props;
    return <div className={classes.root}>
        <div className={classes.column}>
        <SearchBar onRequestSearch={this.handleSearchRequest} placeholder={'Try "Westwood"'} className={classes.searchBar} />
          <button onClick={() => {
              signOutUser();
            }}>
            sign out
          </button>
        </div>
        <div className={classes.column}>
          <MapContainer address={address} center={center} className={classes.mapContainer} />
        </div>
      </div>;
  }
}

export default withStyles(styles)(Dashboard);

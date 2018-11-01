import React, { Component } from 'react';
import { signOutUser, checkUserCredentials } from "./../../Controllers/Dashboard/dashboardController";
import MapContainer from '../MapContainer';

class Dashboard extends Component {
  state = {}
  componentWillMount() {
    checkUserCredentials();
  }
  render() {
    return <div className="Dashboard">
        <MapContainer />
        <button onClick={() => {
            signOutUser();
          }}>
          sign out
        </button>
      </div>;
  }
}

export default Dashboard;

import React, { Component } from 'react';
import { signOutUser, checkUserCredentials } from "./../../Controllers/Dashboard/dashboardController";
import history from "./../../history/history";

class Dashboard extends Component {
  state = {}
  componentWillMount() {
    checkUserCredentials();
  }
  render() {
    return <div className="Dashboard">
        <h1>Dashboard view!</h1>
        <button onClick={() => {
            signOutUser();
          }}>
          sign out
        </button>
      </div>;
  }
}

export default Dashboard;

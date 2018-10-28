import React, { Component } from 'react';
import * as firebase from "firebase";
import { signOutUser, checkUserCredentials } from "./../../Controllers/Dashboard/dashboardController";
import history from "./../../history/history";

class Dashboard extends Component {
  state = {}
  componentWillMount() {
    checkUserCredentials();
  }
  componentDidMount() {
    this._mounted = true
    firebase.auth().onAuthStateChanged((user) => {
      if (this._mounted) {
        this.setState({ displayName: user.displayName })  
        this.setState({ email: user.email })
        this.setState({ photoURL: user.photoURL })
        this.setState({ phoneNumber: user.phoneNumber })
      }
    });
  }

  componentWillUnmount() {
    this._mounted = false;
  }
  render() {
    return <div className="Dashboard">
        <h1>Dashboard view!</h1>
        <div>{this.state.displayName}</div>
        <div>{this.state.email}</div>
        <div>{this.state.phoneNumber}</div>
        <div><img src={this.state.photoURL} /></div>
        <button onClick={() => {
            signOutUser();
          }}>
          sign out
        </button>
      </div>;
  }
}

export default Dashboard;

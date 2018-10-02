import React, { Component } from 'react';

import firebaseApp from "./../../Firebase";

const signOutUser = () => {
  firebaseApp.auth().signOut().then(function () {
    console.log("signed out successfully")
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
    console.log("sign out unsuccessful")
  });
}

class DashboardView extends Component {
  render() {
    return (
      <div className="DashboardView">
        <h1>Dashboard view!</h1>
        <button onClick={()=>{signOutUser()}}>sign out</button>
      </div>
    );
  }
}

export default DashboardView;

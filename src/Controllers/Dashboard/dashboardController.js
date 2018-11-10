import React from "react";
import history from "./../../history/history";
import * as firebase from "firebase";
import firebaseApp from "./../../Firebase";

export const checkUserCredentials = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // user is signed in
    } else {
      console.log("No user is signed in.")
      history.push("/login");
    }
  });
}

export const signOutUser = () => {
  firebaseApp
    .auth()
    .signOut()
    .then(function() {
      console.log("signed out successfully");
      history.push("/login");
      // Sign-out successful.
    })
    .catch(function(error) {
      // An error happened.
      console.log("sign out unsuccessful");
    });
};

export const testAddresses = [
  { key: "1", name: "testAddress1", address: "807 Alcosta Drive, Milpitas, CA, 95035", label: "Clean Parking Spot", coordinates: { lat: 37.440240, lng: -121.892750 }},
  { key: "2", name: "testAddress2", address: "804 Los Lomas, Milpitas, CA, 95035", label: "Easy to find spot", coordinates: { lat: 37.439080, lng: -121.892820 } },
  { key: "3", name: "testAddress3", address: "846 Alcosta Drive, Milpitas, CA, 95035", label: "Well Maintained Spot", coordinates: { lat: 37.439850, lng: -121.891970} }
]

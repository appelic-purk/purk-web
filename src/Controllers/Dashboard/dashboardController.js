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

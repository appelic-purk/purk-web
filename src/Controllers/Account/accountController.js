import * as firebase from "firebase";
import firebaseApp from "./../../Firebase";
import history from "./../../history/history";

export const signOutUser = () => {
  firebaseApp
    .auth()
    .signOut()
    .then(function () {
      console.log("signed out successfully");
      history.push("/login");
      // Sign-out successful.
    })
    .catch(function (error) {
      // An error happened.
      console.log("sign out unsuccessful");
    });
};
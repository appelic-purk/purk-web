import firebaseApp from "./../../Firebase";
import history from "./../../history/history";
import * as firebase from "firebase";

export const signInUserWithEmail = (email, password, rememberMe) => {
  if (!rememberMe) {
    firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(function () {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        firebaseApp
          .auth().signInWithEmailAndPassword(email, password)
          .then(function (firebaseUser) {
            console.log("success");
            history.push("/dashboard");
          })
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
          });
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      });
  } else {
    firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        console.log("Persistence is now Local")
        firebaseApp
          .auth().signInWithEmailAndPassword(email, password)
          .then(function (firebaseUser) {
            console.log("success");
            history.push("/dashboard");
          })
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
          });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }
};

export const signInSavedUser = () => {
  firebaseApp.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log('user is signed in already')
      history.push("/dashboard");
    } else {
      // No user is signed in.
      console.log('no user is signed in yet')
    }
  });
}

export const signInUserWithFacebook = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  signInUserWithSocialMedia(provider);
}

export const signInUserWithGoogle = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  signInUserWithSocialMedia(provider);
}

const signInUserWithSocialMedia = (provider) => {
  firebaseApp.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    history.push("/dashboard");
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  });
}
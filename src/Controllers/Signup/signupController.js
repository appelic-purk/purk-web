import firebaseApp from "./../../Firebase";
import history from "./../../history/history";
import * as firebase from "firebase";

export const createUserWithEmail = (email, password, retypePassword) => {
  if (password !== retypePassword) {
    // Handle when passwords don't match here.
    alert("Passwords don't match.")
  } else {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(function (firebaseUser) {
        if (!firebaseUser.user.phoneNumber) {
          history.push('/verify');
        } else {
          history.push('/dashboard');
        }
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      });
  }
}

export const createUserWithFacebook = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  createUserWithSocialMedia(provider);
}

export const createUserWithGmail = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  createUserWithSocialMedia(provider);
}

const createUserWithSocialMedia = (provider) => {
  firebaseApp.auth().signInWithPopup(provider).then(function (firebaseUser) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = firebaseUser.credential.accessToken;
    // The signed-in user info.
    var user = firebaseUser.user;
    // firebaseApp.auth().signInWithRedirect(provider);
    if (!firebaseUser.user.phoneNumber) {
      history.push('/verify');
    } else {
      history.push('/dashboard')
    }
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
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
        history.push('/dashboard')
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
  firebaseApp.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // firebaseApp.auth().signInWithRedirect(provider);
    history.push("/dashboard");
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(error)
  });
}
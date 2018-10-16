import * as firebase from "firebase";
import firebaseApp from "./../../Firebase";
import history from "./../../history/history";

export const validations = () => {
  firebaseApp.auth().onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      // User is signed in.
      console.log("user is signed in already");
      if (firebaseUser.phoneNumber) {
        console.log("user has already verified phone number")
        history.push("./dashboard");  
      }
    } else {
      // No user is signed in.
      history.push("./signup")
    }
  });
}

export const verifyPhoneNumber = (phoneNumber) => {
  let success = false;
  let user = firebase.auth().currentUser;
  firebase.auth().useDeviceLanguage();
  var appVerifier = window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'invisible'
  });

  user.linkWithPhoneNumber(phoneNumber, appVerifier).then(function(confirmationResult) {
    window.confirmationResult = confirmationResult;
    success = true;
    console.log("reCAPTCHA success")
    }).catch(function (error) {
      // Error; SMS not sent
      // ...
      alert(error);
    });
  return success;
}

export const verifyCode = (code) => {
  window.confirmationResult.confirm(code).then(function (result) {
    // User signed in successfully.
    var user = result.user;
    history.push('/welcome')
    // ...
  }).catch(function (error) {
    // User couldn't sign in (bad verification code?)
    // ...
    alert(error.message)
    console.log(error)
  });
}
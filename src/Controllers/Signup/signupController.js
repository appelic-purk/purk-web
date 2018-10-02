import firebaseApp from "./../../Firebase";
import history from "./../../history/history";

export const createUserWithEmail = (email, password, retypePassword) => {
  if (password !== retypePassword) {
    // Handle when passwords don't match here.
    alert("Passwords don't match.")
  } else {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(function (firebaseUser) {
        console.log('success')
        history.push('/dashboard')
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage)
      });
  }
}
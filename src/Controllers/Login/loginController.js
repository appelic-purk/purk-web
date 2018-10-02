import firebaseApp from "./../../Firebase";
import history from "./../../history/history";

export const signInUserWithEmail = (email, password) => {
  firebaseApp
    .auth().signInWithEmailAndPassword(email, password)
    .then(function(firebaseUser) {
      console.log("success");
      history.push("/dashboard");
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
};

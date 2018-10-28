import history from "./../../history/history";
import * as firebase from "firebase";
import firebaseApp from "./../../Firebase";

export function getCroppedImg(image, pixelCrop, fileName) {
  const canvas = document.createElement('canvas');
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(file => {
      file.name = fileName;
      resolve(file);
    }, 'image/jpeg');
  });
}

export function updateProfile(img, displayName) {
  let user = firebaseApp.auth().currentUser;
  let uid = user.uid;
  var storageRef = firebase.storage().ref();
  var displayPhotoRef = storageRef.child(uid+"-profileImg.jpeg");
  var displayPhotoImagesRef = storageRef.child("images/"+uid+"-profileImg.jpeg")
  const metadata = { contentType: 'image/jpeg'}

  displayPhotoImagesRef.put(img, metadata).then(function(snapshot) {
    snapshot.ref.getDownloadURL().then(function(downloadURL) {
      user.updateProfile({
        displayName: displayName,
        photoURL: downloadURL
      }).then(() => {
        console.log(user)
        if (user.displayName !== null) {
          history.push("/dashboard");
        }
      })
    });

    console.log("Uploaded a blob")
  })
}
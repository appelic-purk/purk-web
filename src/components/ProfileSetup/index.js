import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import "./index.css";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { getCroppedImg, updateProfile } from "./../../Controllers/ProfileSetup/profileSetupController";
import history from "./../../history/history";
import firebaseApp from "./../../Firebase";

class ProfileSetup extends Component {
  state = {
    openCropper: false,
    src: null,
    crop: {
      x: 10,
      y: 10,
      width: 80,
      height: 80
    },
    img: null
  };

  handleClose = () => {
    this.setState({ openCropper: false })
    let img = new Image();
    img.src = this.state.src;
    getCroppedImg(img, this.state.pixelCrop, "profileImg").then(img =>
      this.setState({ img: img })
    );
  }

  onSelectFile(e) {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () =>
          this.setState({
            src: reader.result,
            openCropper: true
          }),
        false
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = (pixelCrop) => {
    this.setState({ pixelCrop: pixelCrop})
  }

  onCropChange = (crop, pixelCrop) => {
    this.setState({ crop: crop });
    this.setState({ pixelCrop: pixelCrop })
  }

  handleSubmit = () => {
    if (this.state.displayName === null || this.state.img === null) {
      alert("Please fill out the required details.")
    } else {
      updateProfile(this.state.img, this.state.displayName);
    }
  }

  handleChange = obj => {
    this.setState(obj);
  }

  componentWillMount() {
    firebaseApp.auth().onAuthStateChanged(function (user) {
      if (user) {
        if (user.photoURL !== null && user.displayName !== null) {
          history.push("/dashboard");
        }
      }
    });
  }

  render() {
    return <div className="ProfileSetup">
        <div className="title">We'd like to get to know you better.</div>
        <div>
          <div className="row">
            <TextField label={"Full Name"} onChange={e => {
                this.handleChange({ displayName: e.target.value });
              }} required />
          </div>
          <div className="row">
            <input onChange={e => this.onSelectFile(e)} type="file" className="inputfile inputfile-1" id="file-1"/>
            <label htmlFor="file-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
              </svg> <span>Upload Profile Picture</span>
            </label>
          </div>
          {this.state.src ? 
          <Dialog open={this.state.openCropper} onClose={this.handleClose}>
            <DialogTitle>Crop Image</DialogTitle>
              <ReactCrop src={this.state.src} crop={this.state.crop} onChange={this.onCropChange} onImageLoaded={this.onImageLoaded}/>
              <Button onClick={this.handleClose} autoFocus>
                Done
              </Button>
          </Dialog> : null}
        </div>
        <div>
          <Button onClick={this.handleSubmit}>Done</Button>
        </div>
      </div>;
  }
}

export default ProfileSetup;
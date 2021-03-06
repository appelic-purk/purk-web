import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './index.css';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import { createUserWithFacebook, createUserWithGmail } from "./../../../Controllers/Signup/signupController";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3B5998"
    },
    secondary: {
      main: "#db3236"
    }
  }
});

class SocialMediaSignUp extends Component {
  render() {
    return <div className="SocialMediaLogin">
        <div className="row">
          <MuiThemeProvider theme={theme}>
            <Button color="primary" onClick={createUserWithFacebook} variant="contained" fullWidth>Sign Up With Facebook</Button>
          </MuiThemeProvider>
        </div>
        <div className="row">
        <MuiThemeProvider theme={theme}>
          <Button color="secondary" onClick={createUserWithGmail} variant="contained" fullWidth>Sign Up With Google</Button>
        </MuiThemeProvider>
        </div>
      </div>;
  }
}

export default SocialMediaSignUp;
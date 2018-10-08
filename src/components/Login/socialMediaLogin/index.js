import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './index.css';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import { signInUserWithFacebook, signInUserWithGoogle } from '../../../Controllers/Login/loginController';

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

class SocialMediaLogin extends Component {
  render() {
    return <div className="SocialMediaLogin">
        <div className="row">
          <MuiThemeProvider theme={theme}>
            <Button
              color="primary"
              onClick={()=>signInUserWithFacebook()}
              variant="contained"
              fullWidth
            >Login With Facebook</Button>
          </MuiThemeProvider>
        </div>
        <div className="row">
        <MuiThemeProvider theme={theme}>
          <Button
            color="secondary" 
            onClick={()=>signInUserWithGoogle()}
            variant="contained"
            fullWidth>Login With Google</Button>
        </MuiThemeProvider>
        </div>
      </div>;
  }
}

export default SocialMediaLogin;
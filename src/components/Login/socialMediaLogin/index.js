import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './index.css';
import GoogleButton from "react-google-button";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4285F4"
    },
    secondary: {
      main: "#b2b2b2"
    }
  }
});

class SocialMediaLogin extends Component {
  render() {
    return <div className="SocialMediaLogin">
      <div className="row">
        <GoogleButton onClick={()=>{console.log("Google Login Clicked")}}/>
      </div>
    </div>;
  }
}

export default SocialMediaLogin;
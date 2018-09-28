import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './index.css';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffa38b"
    },
    secondary: {
      main: "#b2b2b2"
    }
  }
});

class EmailLogin extends Component {
  render() {
    return <div className="EmailLogin">
        <div className="row">
          <TextField variant="outlined" label={"Email"} fullWidth />
        </div>
        <div className="row">
          <TextField type="password" variant="outlined" label={"Password"} fullWidth />
        </div>
        <div className="row">
          <MuiThemeProvider theme={theme}>
            <Button variant="outlined" color="primary" fullWidth>Log In</Button>
          </MuiThemeProvider>
        </div>
      </div>;
  }
}

export default EmailLogin;
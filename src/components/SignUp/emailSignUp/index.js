import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import history from "./../../../history/history";
import './index.css';
import { createUserWithEmail } from "./../../../Controllers/Signup/signupController";
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

class EmailSignUp extends Component {
  state = { }

  handleChange = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  render() {
    return <div className="EmailLogin">
        <div className="row">
          <TextField
            variant="outlined"
            onChange={(event) => { this.handleChange('email', event) }}
            label={"Email"}
            fullWidth />
        </div>
        <div className="row">
          <TextField
            type="password"
            onChange={(event)=>{this.handleChange('password', event)}}
            variant="outlined"
            label={"Password"}
            fullWidth />
        </div>
        <div className="row">
          <TextField
            type="password"
            onChange={(event) => { this.handleChange('retypePassword', event) }}
            variant="outlined"
            label={"Retype Password"}
            fullWidth />
        </div>
        <div className="row">
          <MuiThemeProvider theme={theme}>
            <Button
              variant="outlined"
              color="primary"
              onClick={()=>{createUserWithEmail(this.state.email, this.state.password, this.state.retypePassword)}}
              fullWidth>Go</Button>
          </MuiThemeProvider>
        </div>
        <div className="row">
        <p>Already have an account? <a onClick={() => { history.push("/Login") }}>Login</a></p>
        </div>
      </div>;
  }
}

export default EmailSignUp;
import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import history from './../../../history/history';
import { signInUserWithEmail, signInSavedUser } from "./../../../Controllers/Login/loginController";
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
  state = {
    rememberMe: false
  };

  componentDidMount() {
    signInSavedUser();
  }

  handleChange = (key, event) => {
    this.setState({ [key]: event.target.value });
  }

  handleCheckboxChange = () => {
    this.setState({ rememberMe: !this.state.rememberMe })
  }

  render() {
    let { email, password, rememberMe } = this.state;
    return <div className="EmailLogin">
        <div className="row">
          <TextField variant="outlined" onChange={event => {
              this.handleChange("email", event);
            }} label={"Email"} fullWidth />
        </div>
        <div className="row">
          <TextField type="password" onChange={event => {
              this.handleChange("password", event);
            }} variant="outlined" label={"Password"} fullWidth />
        </div>
        <div className="row">
          <MuiThemeProvider theme={theme}>
            <Button
              onClick={()=>{signInUserWithEmail(email, password, rememberMe)}}
              variant="outlined"
              color="primary"
              fullWidth
            >
              Log In
            </Button>
          </MuiThemeProvider>
        </div>
        <div className="row-col">
          <div className="remember-me">
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                  onChange={()=>{this.handleCheckboxChange()}}
                  value="Remember me" />}
                label="Remember Me" />
            </FormGroup>
          </div>
          <div className="forgot-password">
            <span>
              <a onClick={() => {
                  history.push("/resetPassword");
                }}>
                Forgot Password
              </a>
            </span>
          </div>
        </div>
        <div className="row">
          <p>
            Don't have an account? <a onClick={() => {
                history.push("/signup");
              }}>
              Sign Up
            </a>
          </p>
        </div>
      </div>;
  }
}

export default EmailLogin;
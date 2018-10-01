import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import history from './../../../history/history';
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
        <div className="row-col">
          <div className="remember-me">
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={this.state.checkedA}
                    // onChange={this.handleChange('checkedA')}
                    value="Remember me"
                  />
                }
                label="Remember Me" />
            </FormGroup>
          </div>
          <div className="forgot-password">
            <span>
              <a onClick={()=>{history.push('/resetPassword')}}>Forgot Password</a>
            </span>
          </div>
        </div>
        <div className="row">
          <p>Don't have an account? <a onClick={()=>{history.push('/signup')}}>Sign Up</a></p>
        </div>
      </div>;
  }
}

export default EmailLogin;
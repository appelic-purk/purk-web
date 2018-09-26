import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    }
  }
});

class Container7 extends Component {
  render() {
    return <div className="Container7">
        <div className="col1">
          <div className="title">
            <div className="Container7_title">PURK</div>
          </div>
          <p>info.purk@gmail.com</p>
          <p>(213) 927-5532</p>
        </div>
        <div className="col2">
          <u>MENU</u>
          <MuiThemeProvider theme={theme}>
            <Button color={"primary"}>List A Spot</Button>
            <Button color={"primary"}>Rent A Spot</Button>
          </MuiThemeProvider>
        </div>
      </div>;
  }
}

export default Container7;
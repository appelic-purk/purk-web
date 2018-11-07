import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Popup from 'reactjs-popup';

import FacebookIcon from './../../../images/icons/fb_raw.png';
import InstagramIcon from './../../../images/icons/instagram_raw.png';
import TwitterIcon from './../../../images/icons/twitter_raw.png';
import ContactPopUp from './../../../components/Home/Popups/ContactPopUp.js';

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

class Footer extends Component {
  render() {
    return <div className="Footer">
        <div className="col1">
          <div className="title">
            <div className="Footer_title">PURK</div>
          </div>
          <p>info.purk@gmail.com</p>
          <p>(213) 927-5532</p>
        </div>
        <div className="col2">
          <u>MENU</u>
          <MuiThemeProvider theme={theme}>
            <Button color={"primary"}>List A Spot</Button>
            <Button color={"primary"}>Rent A Spot</Button>
            <Button color={"primary"}>Contact Us</Button>
            <Button color={"primary"}>Sign Up for Updates</Button>
            <Button color={"primary"}>Leave Us a Review</Button>
          </MuiThemeProvider>
        </div>
        <div className="col3">
            <a href="https://www.facebook.com/purkparking">
                <img className="img" src={FacebookIcon} />
            </a>
            <a href="https://www.instagram.com/purkparking/">
                <img className="img" src={InstagramIcon} />
            </a>
            <a href="https://twitter.com/purkparking">
                <img className="img" src={TwitterIcon} />
            </a>
        </div>
      </div>;
  }
}

export default Footer;


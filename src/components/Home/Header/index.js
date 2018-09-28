import React, { Component } from "react";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Flexbox from 'flexbox-react';
import './index.css';
import Logo from './../../../images/PurkLogoSalmon.png'
import SearchBar from "material-ui-search-bar";
import history from './../../../history/history';
import { Link } from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#b2b2b2',
        },
    }
});

class Header extends Component {
    render() {
        return <div className="header">
            <Flexbox flexDirection="column">
              <Flexbox element="header" height="60px">
                <div style={{ flexGrow: 0 }}>
                    <a href="/" style={{ flexGrow: 0 }}>
                        <img src={Logo}  />
                    </a>
                </div>
                <SearchBar onChange={() => console.log("onChange")} onRequestSearch={() => console.log("onRequestSearch")} placeholder={'Try "Westwood"'} style={{ margin: "0 auto", maxWidth: 800, flexGrow: 8 }} />
                <MuiThemeProvider theme={theme}>
                    <Button color={"primary"}>Become a host</Button>
                    <Button onClick={()=>{history.push('/signup')}} color={"primary"}>Sign up</Button>
                    <Button onClick={()=>{history.push('/login')}}color={"primary"}>Log in</Button>
                </MuiThemeProvider>    
              </Flexbox>
            </Flexbox>
          </div>;
    }
}

export default Header;
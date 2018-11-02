import React, { Component } from "react";
import SideNav, {
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import HomeIcon from "@material-ui/icons/Home";
import AccountIcon from "@material-ui/icons/AccountCircle";
import ListIcon from "@material-ui/icons/ListAlt";
import ParkIcon from "@material-ui/icons/LocalParking";
import styled from "styled-components";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import * as firebase from "firebase";
import ClickOutside from "react-click-outside";
import history from "./../../history/history";
import { Route } from "react-router-dom";

class Sidebar extends Component {
  state = {
    selected: "home",
    expanded: false,
    displayName: ""
  };

  onSelect = selected => {
    const to = '/' + selected;
    this.setState({ selected: selected });
    history.push(to);
  };
  onToggle = expanded => {
    this.setState({ expanded: expanded });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ photoURL: user.photoURL });
      this.setState({ displayName: user.displayName });
    });
  }

  render() {
    const { classes } = this.props;
    const { expanded, displayName, photoURL } = this.state;
    return <div>
        <ClickOutside onClickOutside={() => {
            this.setState({ expanded: false });
          }}>
          <Route render={({ location, history }) => <SideNav className={classes.sidebar} onSelect={this.onSelect} onToggle={this.onToggle} expanded={this.state.expanded}>
                <SideNav.Toggle />
                <div className={expanded ? classes.navHeaderExpanded : classes.navHeaderNotExpanded}>
                  <div className={classes.navTitle}>Purk</div>
                  <div className={classes.navSubTitle}>Menu</div>
                </div>
                {expanded ? <div className={classes.navInfoPane}>
                    <img className={classes.profileImage} src={photoURL} />
                    <div className={classes.displayName}>{displayName}</div>
                  </div> : null}
                <SideNav.Nav defaultSelected="home">
                  <NavItem eventKey="Dashboard">
                    <NavIcon style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <HomeIcon />
                    </NavIcon>
                    <NavText>Home</NavText>
                  </NavItem>
                  <NavItem eventKey="Account">
                    <NavIcon style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <AccountIcon />
                    </NavIcon>
                    <NavText className={classes.navText}>My Account</NavText>
                  </NavItem>
                  <NavItem eventKey="Listings">
                    <NavIcon style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <ListIcon />
                    </NavIcon>
                    <NavText>My Listings</NavText>
                  </NavItem>
                  <NavItem eventKey="Reservations">
                    <NavIcon style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <ParkIcon />
                    </NavIcon>
                    <NavText>My Reservations</NavText>
                  </NavItem>
                </SideNav.Nav>
              </SideNav>} />
        </ClickOutside>
      </div>;
  }
}

export default withStyles(styles)(Sidebar);
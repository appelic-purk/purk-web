import React, { Component } from "react";
import SideNav, {
  Toggle,
  Nav,
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

const NavHeader = styled.div`
  display: ${props => (props.expanded ? "block" : "none")};
  white-space: nowrap;
  background-color: #fc7f5f;
  color: #fff;
  > * {
    color: inherit;
    background-color: inherit;
  }
`;

// height: 20px + 10px + 10px = 40px
const NavTitle = styled.div`
  font-size: 2em;
  line-height: 20px;
  padding: 10px 0;
`;

// height: 20px + 4px = 24px;
const NavSubTitle = styled.div`
  font-size: 1em;
  line-height: 20px;
  padding-bottom: 4px;
`;

const NavInfoPane = styled.div`
  float: left;
  width: 100%;
  padding: 10px 20px;
  background-color: #ffa38b;
`;

class Sidebar extends Component {
  state = {
    selected: "home",
    expanded: false,
    displayName: ""
  };

  onSelect = selected => {
    this.setState({ selected: selected });
  };
  onToggle = expanded => {
    this.setState({ expanded: expanded });
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ photoURL: user.photoURL });
      this.setState({ displayName: user.displayName });
    });
  }

  render() {
    const { classes } = this.props;
    const { selected, expanded, displayName, photoURL } = this.state;
    return <div>
      <ClickOutside
        onClickOutside={() => {
          this.setState({ expanded: false });
        }}
      >
        <SideNav onSelect={this.onSelect} onToggle={this.onToggle} expanded={this.state.expanded}>
          <SideNav.Toggle />
          <NavHeader expanded={expanded}>
            <NavTitle>Purk</NavTitle>
            <NavSubTitle>Menu</NavSubTitle>
          </NavHeader>
          {expanded && <NavInfoPane>
            <img className={classes.profileImage} src={photoURL} />
            <div className={classes.displayName}>{displayName}</div>
          </NavInfoPane>}
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <HomeIcon />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="myAccount">
            <NavIcon style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <AccountIcon />
              </NavIcon>
              <NavText>My Account</NavText>
            </NavItem>
            <NavItem eventKey="myListings">
            <NavIcon style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ListIcon />
              </NavIcon>
              <NavText>My Listings</NavText>
            </NavItem>
            <NavItem eventKey="myReservations">
            <NavIcon style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ParkIcon />
              </NavIcon>
              <NavText>My Reservations</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </ClickOutside>
    </div>;
  }
}

export default withStyles(styles)(Sidebar);
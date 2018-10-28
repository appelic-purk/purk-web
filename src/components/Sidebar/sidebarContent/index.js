import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import * as firebase from "firebase";
import { render } from "react-dom";

class SidebarContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoURL: "",
      displayName: ""
    }
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ photoURL: user.photoURL });
      this.setState({ displayName: user.displayName });
    });
  }

  render() {
    let { classes } = this.props;
    const sidebarLinks = [
    <a key="myAccount" href="#" className={classes.sidebarLink}>My Account</a>,
    <a key="myReservations" href="#" className={classes.sidebarLink}>My Reservations</a>,
    <a key="myListings" href="#" className={classes.sidebarLink}>My Listings</a>,
    <a key="myReviews" href="#" className={classes.sidebarLink}>My Reviews</a>,
  ];
    return <div className={classes.sidebar}>
      <div>
        <img className={classes.profileImage} src={this.state.photoURL} />
      </div>
      <div className={classes.displayName}>{this.state.displayName}</div>
      <hr />
      <div className={classes.content}>{sidebarLinks}</div>
    </div>;
  }
}

export default withStyles(styles)(SidebarContent);
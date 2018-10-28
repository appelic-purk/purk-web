import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";

const SidebarContent = props => {
  let { classes } = props;
  let sidebarLinks = [
    <a href="#" className={classes.sidebarLink}>My Account</a>,
    <a href="#" className={classes.sidebarLink}>My Reservations</a>,
    <a href="#" className={classes.sidebarLink}>My Listings</a>,
    <a href="#" className={classes.sidebarLink}>My Reviews</a>,
  ];

  return <div className={classes.sidebar}>
    <span className={classes.sidebarTitle}>Menu</span>
    <div className={classes.content}>
      {sidebarLinks}
    </div>
  </div>
}

export default withStyles(styles)(SidebarContent);
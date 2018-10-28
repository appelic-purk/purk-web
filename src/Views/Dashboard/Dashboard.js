import React, { Component } from 'react';
import Dashboard from "./../../components/Dashboard/index";
import Sidebar from "./../../components/Sidebar/index";
import { withStyles, createStyles } from "@material-ui/core/styles";

const styles = createStyles({
  root: {
    display: "flex",
    flexDirection: "column"
  }
});

class DashboardView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { classes } = this.props;
    return <div className={classes.DashboardView}>
      <Sidebar />
      <Dashboard />
    </div>;
  }
}

export default withStyles(styles)(DashboardView);

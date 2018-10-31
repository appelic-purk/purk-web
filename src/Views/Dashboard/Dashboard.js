import React, { Component } from 'react';
import Dashboard from "./../../components/Dashboard/index";
import Sidebar from "./../../components/Sidebar/index";
import { withStyles, createStyles } from "@material-ui/core/styles";
import "./index.css";

const styles = createStyles({
  root: {
    display: "flex",
    flexDirection: "row"
  }
});

class DashboardView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { classes } = this.props;
    return <div className={"DashboardView"}>
      <Sidebar />
      <Dashboard />
    </div>;
  }
}

export default withStyles(styles)(DashboardView);

import React, { Component } from 'react';
import Dashboard from "./../../components/Dashboard/index";
import Sidebar from "./../../components/Sidebar/index";
import "./index.css";

class DashboardView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="DashboardView">
      <Sidebar />
      <Dashboard />
    </div>;
  }
}

export default DashboardView;

import React, { Component } from 'react';
import Dashboard from "./../../components/Dashboard/index";
import Sidebar from "./../../components/Sidebar/index";

class DashboardView extends Component {
  render() {
    return <div className="DashboardView">
        <Sidebar />
        <Dashboard />
      </div>;
  }
}

export default DashboardView;

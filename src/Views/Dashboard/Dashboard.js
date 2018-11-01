import React, { Component } from 'react';
import Dashboard from "./../../components/Dashboard/index";
import Sidebar from "./../../components/Sidebar/index";
import "./index.css";

class DashboardView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
        <div>
          <Sidebar />
        </div>
        <div>
        <Dashboard />
        </div>
    </div>;
  }
}

export default DashboardView;

import React, { Component } from "react";
import Sidebar from "./../../components/Sidebar/index";

class AccountView extends Component {
  render() {
    return <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <h1>My Account</h1>
      </div>
    </div>;
  }
}

export default AccountView
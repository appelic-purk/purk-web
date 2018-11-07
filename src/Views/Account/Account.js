import React, { Component } from "react";
import Sidebar from "./../../components/Sidebar/index";
import AccountInformation from "../../components/Account";


class AccountView extends Component {
  render() {
    return <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <AccountInformation />
      </div>
    </div>;
  }
}

export default AccountView
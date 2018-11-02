import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import styles from "./styles.js";
import { vehicleColumns, addressesColumns } from "./constants.js";
import DataTable from "../../widgets/DataTable/index";
import * as firebase from "firebase";
import { Button } from "@material-ui/core";

class AccountInformation extends Component {
  state = {
    displayName: "",
    email: ""
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ email: user.email });
      this.setState({ displayName: user.displayName });
    });
  }

  handleChange(event) {
    this.setState(event.target.value);
  }
  render() {
    let { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <h1>My Account</h1>
          <span>View and edit your profile information below.</span>
        </div>
        <div className={classes.form}>
          <div>
            <TextField
              onChange={this.handleChange}
              className={classes.textField}
              fullWidth
              label={"Display Name"}
              value={this.state.displayName}
            />
            <TextField
              onChange={this.handleChange}
              className={classes.textField}
              fullWidth
              label={"Email"}
              value={this.state.email}
            />
          </div>
          <div>
            <div className={classes.formTitle}>Address</div>
            <div className={classes.datatable}>
              <DataTable
                name={"Addresses"}
                tableName={"Addresses"}
                value={[]}
                handleChange={e => {
                  console.log("account info: ", e);
                }}
                presentOnly={false}
                data={[
                  {
                    street: "798 Alcosta Drive",
                    city: "Milpitas",
                    zipcode: "95035",
                    state: "CA"
                  }
                ]}
                columns={addressesColumns}
              />
            </div>
          </div>
          <div>
            <div className={classes.formTitle}>Vehicle Information</div>
            <div className={classes.datatable}>
              <DataTable
                name={"Vehicles"}
                tableName={"Vehicles"}
                value={[]}
                handleChange={e => {
                  console.log("account info: ", e);
                }}
                presentOnly={false}
                data={[
                  {
                    licensePlateNumber: "111",
                    carBrand: "Scion",
                    carModel: "FRS",
                    carYear: "2013"
                  }
                ]}
                columns={vehicleColumns}
              />
            </div>
          </div>
          <Button variant="outlined">Update</Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AccountInformation);
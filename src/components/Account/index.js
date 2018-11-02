import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import styles from "./styles.js";
import { stateOptions, countryOptions, vehicleColumns } from "./constants.js";
import DataTable from "../../widgets/DataTable/index";

class AccountInformation extends Component {
  render() {
    let { classes } = this.props;

    return <div className={classes.root}>
        <div>
          <h1>My Account</h1>
          <span>View and edit your profile information below.</span>
        </div>
        <div className={classes.form}>
          <div>
            <TextField className={classes.textField} fullWidth label={"Display Name"} />
            <TextField className={classes.textField} fullWidth label={"Email"} />
          </div>
          <div>
            <div className={classes.formTitle}>Address</div>
              <TextField className={classes.textField} fullWidth label={"Street"} />
            <div className={classes.split}>
              <div className={classes.splitContent}>
                <TextField fullWidth label={"City"} />
              </div>
              <div className={classes.splitContent}>
                <TextField fullWidth label={"Zipcode"} />
              </div>
              <div className={classes.splitContentDropdown}>
                <Dropdown className={classes.dropdownRoot} options={stateOptions} value={null} placeholder="State" controlClassName={classes.dropdownControl} />
              </div>
              <div className={classes.splitContentDropdown}>
                <Dropdown className={classes.dropdownRoot} options={countryOptions} value={null} placeholder="Country" controlClassName={classes.dropdownControl} />
              </div>
            </div>
          </div>
          <div>
            <div className={classes.formTitle}>Vehicle Information</div>
            <div className={classes.datatable}>
              <DataTable
                name={"Vehicles"}
                tableName={"Vehicles"}
                value={[]}
                handleChange={(e) => { console.log("account info: ", e) }}
                presentOnly={false}
                data={[
                  {
                    licensePlateNumber: "111",
                    carBrand: "Scion",
                    carModel: "FRS",
                    carYear: "2013"
                  }
                ]}
                columns={vehicleColumns} />
            </div>
          </div>
        </div>
      </div>;
  }
}

export default withStyles(styles)(AccountInformation);
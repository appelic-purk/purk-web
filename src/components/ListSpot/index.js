import React, { Component } from 'react';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class ListSpot extends Component {
  state = {
    activeStep: 0,
    address: "",
    gated: false
  };

  onAddressChange = (event) => {
    this.setState({ address: event.target.value });
  }

  onCheckboxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  }

  getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return (
        <div>
          <div>
            <TextField
              className={this.props.classes.addressField}
              id="address"
              label="Address"
              fullWidth={true}
              placeholder="1 Hacker Way, Menlo Park"
              value={this.state.address}
              onChange={this.onAddressChange}
            />
          </div>
          <FormControl>
            <FormLabel component="legend">Amenities</FormLabel>
            <FormGroup>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="lit"
                      checked={this.state.lit}
                      onChange={this.onCheckboxChange("lit")}
                    />
                  }
                  label="Lit"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="gated"
                      checked={this.state.gated}
                      onChange={this.onCheckboxChange("gated")}
                    />
                  }
                  label="Gated"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="covered"
                      checked={this.state.covered}
                      onChange={this.onCheckboxChange("covered")}
                    />
                  }
                  label="Covered"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="xlspot"
                      checked={this.state.xlspot}
                      onChange={this.onCheckboxChange("xlspot")}
                    />
                  }
                  label="XL Spot"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="charging"
                      checked={this.state.charging}
                      onChange={this.onCheckboxChange("charging")}
                    />
                  }
                  label="Charging"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="security"
                      checked={this.state.security}
                      onChange={this.onCheckboxChange("security")}
                    />
                  }
                  label="Security"
                />
              </div>
            </FormGroup>
          </FormControl>
          <FormControl>
            <FormLabel component="legend">Type of Spot</FormLabel>
            <FormGroup>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="driveway"
                      checked={this.state.driveway}
                      onChange={this.onCheckboxChange("driveway")}
                    />
                  }
                  label="Driveway"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="parkingLot"
                      checked={this.state.parkingLot}
                      onChange={this.onCheckboxChange("parkingLot")}
                    />
                  }
                  label="Parking Lot"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="homeGarage"
                      checked={this.state.homeGarage}
                      onChange={this.onCheckboxChange("homeGarage")}
                    />
                  }
                  label="Home Garage"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="unpavedLot"
                      checked={this.state.unpavedLot}
                      onChange={this.onCheckboxChange("unpavedLot")}
                    />
                  }
                  label="Unpaved Lot"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="parkingGarage"
                      checked={this.state.parkingGarage}
                      onChange={this.onCheckboxChange("parkingGarage")}
                    />
                  }
                  label="parkingGarage"
                />
              </div>
            </FormGroup>
          </FormControl>
        </div>
      );
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };
  render() {
    const steps = ["Spot Information", "Scheduling", "Payment Information"];
    const { activeStep } = this.state;
    let { classes } = this.props;
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              All steps completed
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
              <div>
                {this.getStepContent(activeStep)}
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                  >
                    Back
                </Button>
                  <Button variant="contained" color="primary" onClick={this.handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ListSpot)
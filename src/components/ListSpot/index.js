import React, { Component } from 'react';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import SpotInformation from "./steps/spotInformation";
import PaymentInformation from "./steps/paymentInformation";
import styles from "./styles";

class ListSpot extends Component {
  state = {
    activeStep: 0,
    address: "",
    numSpots: 1,
    gated: false,
    lit: false,
    covered: false,
    xlspot: false,
    charging: false,
    security: false,
    driveway: false,
    parkingLot: false,
    homeGarage: false,
    unpavedLot: false,
    parkingGarage: false,
    paymentPlan: '',
    paymentInfo: {
      method: "venmo",
      data: {
        phone: ""
      }
    },
    imageData: [
        {
            id: 0,
            img: window.location.origin + '/house-1.png',
            title: 'Image',
            author: 'author'
        },
        {
            id: 1,
            img: window.location.origin + '/house-2.jpg',
            title: 'Image1',
            author: 'author1',
        },
        {
            id: 2,
            img: "",
            title: "",
            author: "",
        }
    ],
    instruction: ""
  };

  onTextfieldChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  onCheckboxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  }

  handleChangePlan = (planValue) => {
    this.setState({paymentPlan: planValue});
  }

  handleChangePaymentInfo = (methodInfo) => {
    this.setState({paymentInfo: methodInfo});
  }

  handleChangeInstruction = (instruction) => {
    this.setState({instruction: instruction});
  }

  getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return (
        <SpotInformation
          address={this.state.address}
          onTextfieldChange={this.onTextfieldChange}
          numSpots={this.state.numSpots}
          onCheckboxChange={this.onCheckboxChange}
          lit={this.state.lit}
          gated={this.state.gated}
          covered={this.state.covered}
          xlspot={this.state.xlspot}
          charging={this.state.charing}
          security={this.state.security}
          driveway={this.state.driveway}
          parkingLot={this.state.parkingLot}
          homeGarage={this.state.homeGarage}
          unpavedLot={this.state.unpavedLot}
          parkingGarage={this.state.parkingGarage}
        />
      );
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return(
        <PaymentInformation 
        paymentInfo={this.state.paymentInfo} 
        imageData={this.state.imageData} 
        paymentPlan={this.state.paymentPlan}
        handleChangePlan={this.handleChangePlan}
        handleChangePaymentInfo={this.handleChangePaymentInfo}
        handleChangeInstruction={this.handleChangeInstruction}
        />
      );
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
    console.log(this.state);
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
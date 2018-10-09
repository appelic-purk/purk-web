import React, { Component } from "react";
import PhoneVerification from "./../../components/PhoneVerification/phoneNumberPrompt";
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import "./PhoneVerification.css";
import CodePrompt from "../../components/PhoneVerification/codePrompt";
import { verifyPhoneNumber, verifyCode } from "./../../Controllers/PhoneVerification/phoneVerification";

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1
  }
});

class PhoneVerificationView extends Component {
  state = {
    activeStep: 0,
    maxSteps: 2,
    code: "",
    phoneNumber: ""
  };

  handleNext = () => {
    verifyPhoneNumber(this.state.phoneNumber);
    
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleChange = (value) => {
    this.setState(value);
  }

  handleDoneClick = () => {
    verifyCode(this.state.code);
  }
  render() {
    let { classes } = this.props;
    let { activeStep, maxSteps, code } = this.state;
    return (
      <div className="PhoneVerificationView">
        <SwipeableViews index={activeStep}>
          <div>
            <PhoneVerification handleChange={this.handleChange} value={this.state.phoneNumber}/>
          </div>
          <div>
            <div id="recaptcha-container"></div>
            <CodePrompt handleChange={this.handleChange} value={code}/>
          </div>
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={activeStep === 1 ? <Button onClick={this.handleDoneClick}>Done</Button> :
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
              id={"verify-phone-number-button"}
            >
              Next
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles)(PhoneVerificationView);

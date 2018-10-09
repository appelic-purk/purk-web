import React, { Component } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./phoneNumberPrompt.css";
import { validations } from "../../Controllers/PhoneVerification/phoneVerification";

class phoneNumberPrompt extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = value => {
    this.props.handleChange({ phoneNumber: value })
  }

  componentDidMount() {
    validations();
  }

  render() {
    return <div className="phoneNumberPrompt">
      <div className="title_row">
        <div className="title">
          Verify Phone Number
        </div>
      </div>
      <div className="phoneInput">
        <form>
          <PhoneInput
            className="PhoneInputField"
            placeholder="Enter Phone Number"
            country="US"
            value={this.props.value}
            onChange={this.handleChange} />
        </form>
      </div>
    </div>
  }
}

export default phoneNumberPrompt;
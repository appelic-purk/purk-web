import React, { Component } from "react";
import ReactCodeInput from "react-code-input";
import "./codePrompt.css";

class CodePrompt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: ""
    };
  }

  handleChange = value => {
    this.props.handleChange({code: value});
  }

  render() {
    let { value } = this.props;
    return (
      <div className="CodePrompt">
        <div className="title_row">
          <div className="title">Enter Code</div>
          A code was sent to your phone number.
        </div>
        <div className="code_input">
          <ReactCodeInput type='tel' fields={6} onChange={this.handleChange} value={value}/>
        </div>
      </div>
    );
  }
}

export default CodePrompt;

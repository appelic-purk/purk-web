import React, { Component } from 'react';
import './index.css';
import EmailSignUp from './emailSignUp/index';
import SocialMediaSignUp from './socialMediaSignUp/index';

class Login extends Component {
  render() {
    return <div className="SignUp">
        <div className="title">
          <div className="LoginTitle">
            <p>Sign Up</p>
          </div>
        </div>
        <div className="cols">
          <div className="col1">
            <EmailSignUp />
          </div>
          <div className="col2">
            <SocialMediaSignUp />
          </div>
        </div>
        <div className="footer">
          By signing up, you agree to our 
          <a>{" "}Terms of Use</a>
          {" "}and 
          <a>{" "}Privacy Policy</a>
        </div>
      </div>;
  }
}

export default Login;
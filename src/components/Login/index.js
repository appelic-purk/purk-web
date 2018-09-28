import React, { Component } from 'react';
import './index.css';
import EmailLogin from './emailLogin/index';
import SocialMediaLogin from './socialMediaLogin/index';

class Login extends Component {
  render() {
    return <div className="Login">
      <div className="title">
        <div className="LoginTitle">
          <p>Log In</p>
        </div>
      </div>
      <div className="cols">
        <div className="col1">
          <EmailLogin />
        </div>
        <div className="col2">
          <SocialMediaLogin />
        </div>
      </div>
    </div>;
  }
}

export default Login;
import React, { Component } from 'react';
import './index.css';
import EmailLogin from './emailLogin/index';

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
          <p>col2</p>
        </div>
      </div>
    </div>;
  }
}

export default Login;
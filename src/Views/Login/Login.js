import React, { Component } from 'react';
import './Login.css';
import Login from './../../components/Login/index';

class LoginView extends Component {
  render() {
    return <div className="LoginView">
      <Login />
    </div>
  }
}

export default LoginView;
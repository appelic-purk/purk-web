import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router } from "react-router-dom";
import history from './history/history';

require("dotenv").load();

console.log("PROCESS.ENV.REACT_APP_PUBLIC_URL: ", process.env.REACT_APP_PUBLIC_URL);
console.log("history location: ", history.location.pathname)

ReactDOM.render((
  <Router history={history}>
    <App />
  </Router>
), document.getElementById('root'));
registerServiceWorker();

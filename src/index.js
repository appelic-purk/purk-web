import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router } from "react-router-dom";
import history from './history/history';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Theme from "./theme.js";

require("dotenv").load();

const theme = createMuiTheme(Theme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router history={history}>
      <App />
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();

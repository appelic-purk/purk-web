import React, { Component } from 'react';
import './App.css';
import Routes from "./routes/routes"
import { createStore } from "redux";
import reducer from "./reducers"
import { Route } from "react-router";

const initialState = { AppName: "Purk-Web" }
const store = createStore(reducer, initialState)

class App extends Component {
  render() {
    let routes = Routes();
    return <div className="App">
        {routes.map(route =>
          <Route key={route.path} exact path={route.path} component={route.component} />
        )}
      </div>;
  }
}

export default App;

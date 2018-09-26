import React, { Component } from 'react';
import './App.css';
import Container1 from './../App/containers/container1/index';
import Container2 from "./../App/containers/container2/index";
import Container3 from "./../App/containers/container3/index";
import Container4 from "./../App/containers/container4/index";
import Container5 from "./../App/containers/container5/index";

class App extends Component {
  render() {
    return <div className="App">
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
      </div>;
  }
}

export default App;

import React, { Component } from 'react';
import Container1 from "./../../components/Home/containers/container1";
import Container2 from "./../../components/Home/containers/container2";
import Container3 from "./../../components/Home/containers/container3";
import Container4 from "./../../components/Home/containers/container4";
import Container5 from "./../../components/Home/containers/container5";
import Container6 from "./../../components/Home/containers/container6";
import Container7 from "./../../components/Home/containers/container7";

class HomeView extends Component {
  render() {
    return <div className="HomeView">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  }
}

export default HomeView;
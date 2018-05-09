import React, { Component } from "react";
import LgnSgnUpBtn from "../../components/LgnSgnUpBtn";
import Logo from "../../components/Logo";
import SplashHeader from "../../components/SplashHeader";
import AboutBtn from "../../components/AboutBtn";

class Splash extends Component {
  render() {
    return (
      <div className="container">
        <SplashHeader />
        <Logo />
        <LgnSgnUpBtn />
      </div>
    );
  }
}

export default Splash;

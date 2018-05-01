import React, { Component } from "react";
import LgnSgnUpBtn from "../../components/LgnSgnUpBtn";
import Logo from "../../components/Logo";
import SplashHeader from "../../components/SplashHeader";

class Splash extends Component {
  render() {
    return (
      <div>
        <SplashHeader />
        <Logo />
        <LgnSgnUpBtn />
      </div>
    );
  }
}

export default Splash;

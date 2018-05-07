import React, { Component } from "react";
import LgnSgnUpBtn from "../../components/LgnSgnUpBtn";
import Logo from "../../components/Logo";
import SplashHeader from "../../components/SplashHeader";

class Splash extends Component {
  render() {
    return <div className="container">
        <SplashHeader />
        <h2>Thank you for visiting The Pico Project!</h2>
        <h3>
          “Saving one dog will not change the world, but surely for that one
          dog, the world will change forever.”
        </h3>
        <p>
          this app is a passion project from a few developers that want to
          help keep dogs from getting lost in the adoption process!
        </p>
        <br />
        <br />
        <br />
        <br />
        <LgnSgnUpBtn />
      </div>;
  }
}

export default Splash;

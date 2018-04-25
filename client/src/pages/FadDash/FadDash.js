import React, { Component } from "react";
import SplashHeader from "../../components/SplashHeader";
import FadForm from "../../components/FadForm";
import Logo from "../../components/Logo";


class FadDash extends Component {
  render() {
    return (
      <div>
        <SplashHeader />
        <Logo />
        <FadForm />
        
      </div>
    );
  }
}

export default FadDash;

import React, { Component } from "react";
import SplashHeader from "../../components/SplashHeader";
import AgencyForm from "../../components/AgencyForm";
import Logo from "../../components/Logo";


class AgencyDash extends Component {
  render() {
    return (
      <div>
        <SplashHeader />
        <Logo />
        <AgencyForm />
        
      </div>
    );
  }
}

export default AgencyDash;

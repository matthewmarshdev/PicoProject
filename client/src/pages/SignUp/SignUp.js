import React, { Component } from "react";
import SplashHeader from "../../components/SplashHeader";
import SignUpForm from "../../components/SignUpForm";
import Logo from "../../components/Logo";


class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <SplashHeader />
        <Logo />
        <SignUpForm />
        
      </div>
    );
  }
}

export default SignUp;

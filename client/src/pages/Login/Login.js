import React, { Component } from "react";
import SplashHeader from "../../components/SplashHeader";
import LoginForm from "../../components/LoginForm";
import Logo from "../../components/Logo";


class Login extends Component {

  render() {
    return (
      <div className="container">
        <SplashHeader />
        <Logo />
        <LoginForm />
        
      </div>
    );
  }
}

export default Login;

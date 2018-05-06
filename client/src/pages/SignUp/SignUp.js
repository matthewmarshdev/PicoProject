import React, { Component } from "react";
import SplashHeader from "../../components/SplashHeader";
import SignUpForm from "../../components/SignUpForm";
import FadForm from "../../components/FadForm";
import AgencyForm from "../../components/AgencyForm";
import Logo from "../../components/Logo";


class SignUp extends Component {

  state = {
    form: false
  }

  renderFad = () => {
    this.setState({
      form: true
    });
  }

  renderAgency = () => {
    this.setState({
      form: false
    })
  }

  render() {
    return (
      <div className="container">
        <SplashHeader />
        <Logo />
        <button
        className="btn"
        value="true"
        onClick={this.renderFad}
        >
        Foster / Adoper
        </button>
        <button
        className="btn"
        value="false"
        onClick={this.renderAgency}
        >
        Agency
        </button>
        { this.state.form ? <FadForm /> : <AgencyForm /> }
      </div>
    );
  }
}

export default SignUp;

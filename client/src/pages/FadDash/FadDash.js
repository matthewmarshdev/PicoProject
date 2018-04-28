import React, { Component } from "react";
import SplashHeader from "../../components/SplashHeader";
import FadForm from "../../components/FadForm";
import FadNav from "../../components/FadNav";
import Logo from "../../components/Logo";


class FadDash extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <SplashHeader />
            <div className="input-field col s2">
              <FadNav />
            </div>
            <div className="input-field col s8">
              <FadForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FadDash;

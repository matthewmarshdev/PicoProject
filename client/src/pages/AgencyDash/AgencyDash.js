import React, { Component } from "react";
import SplashHeader from "../../components/SplashHeader";
import AgencyForm from "../../components/AgencyForm";
import Logo from "../../components/Logo";
import AgencyNav from "../../components/AgencyNav";

class AgencyDash extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <SplashHeader />
            <div className="input-field col s2">
              <AgencyNav />
            </div>
            <div className="input-field col s8">
              <AgencyForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AgencyDash;

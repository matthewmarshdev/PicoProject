import React, { Component } from "react";
import "./SignUpForm.css";

class SignUpForm extends Component {
  render() {
    return (
      <div className="row formRow">
        <form className="col s8">
          <div className="row">
            <div className="input-field col s6">
              <input id="email_inline" type="email" className="validate" />
              <label htmlFor="email_inline">Email</label>
            </div>
            <div className="input-field col s6">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="firstName" type="text" className="validate" />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="lastName" type="text" className="validate" />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="agency" type="text" className="validate" />
              <label htmlFor="agency">Agency Name (optional)</label>
            </div>
            <div className="input-field col s6">
              <input id="phone" type="tel" className="validate" />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>
          <div className="row">
            <p>
              <label>
                <input name="group1" type="radio" checked />
                <span>Foster / Adopter</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio" />
                <span>Agency</span>
              </label>
            </p>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;

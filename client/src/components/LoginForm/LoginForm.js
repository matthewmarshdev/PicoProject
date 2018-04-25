import React, { Component } from "react";
import "./LoginForm.css";

class LoginForm extends Component {


  
  render() {
    return (
      <div className="row formRow">
        <form className="col s8">
          <div className="row">
            <div className="input-field col s6">
              <input id="email_inline" type="email" className="validate" />
              <label htmlFor="email_inline">Email</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Helper text
              </span>
            </div>
            <div className="input-field col s6">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
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

export default LoginForm;

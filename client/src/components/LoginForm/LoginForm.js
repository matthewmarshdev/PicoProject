import React, { Component } from "react";
import "./LoginForm.css";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    authenticated: false
  };

  handleEmailChanged = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlePasswordChanged = event => {
    this.setState({
      password: event.target.value
    });
  };

  //not sure where to send info to get authorization
  //I am using superagent to make a POST here, which I know is out of scope, but since I
  //am axeing for specific data to be sent here and a special body, I went for it
  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const isAlreadyAuthenticated = this.isAuthenticated();
    return (
      <div>
        {isAlreadyAuthenticated ? (
          <Redirect to={{ pathname: "/faddash" }} />
        ) : (
          <div className="row formRow">
            <form className="col s8" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s6 offset-s6">
                  <input
                    id="email_inline"
                    type="email"
                    className="validate"
                    value={this.state.email}
                    onChange={this.handleEmailChanged}
                  />
                  <label htmlFor="email_inline">Email</label>
                  <span
                    className="helper-text"
                    data-error="wrong"
                    data-success="right"
                  />
                </div>
                <div className="input-field col s6 offset-s6">
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    value={this.state.password}
                    onChange={this.handlePasswordChanged}
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="col s2 offset-s8">
                  <button
                    className="btn waves-effect waves-light offset-s6"
                    type="submit"
                    name="action"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default LoginForm;

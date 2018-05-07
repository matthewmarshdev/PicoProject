import React, { Component } from "react";
import "./SignUpForm.css";
import API from "../../utils/API";
import AgencyForm from "../AgencyForm/AgencyForm";
import FadForm from "../FadForm/FadForm";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    agency: "",
    phone: "",
    type: "",
    profit: "",
    duration: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    zip: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    //console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    API.saveUser(this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="row formRow">
        <form className="col s8">
          <div className="row">
            <h4>Sign Up to start registering dogs!</h4>
            <div className="input-field col s6">
              <input
                id="email_inline"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                className="validate"
              />
              <label htmlFor="email_inline">Email</label>
            </div>
            <div className="input-field col s6">
              <input
                id="password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="validate"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                className="validate"
              />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={this.state.lastName}
                onChange={this.handleInputChange}
                className="validate"
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="agency"
                name="agency"
                type="text"
                className="validate"
                value={this.state.agency}
                onChange={this.handleInputChange}
              />
              <label htmlFor="agency">Agency Name (optional)</label>
            </div>
            <div className="input-field col s6">
              <input
                id="phone"
                name="phone"
                type="tel"
                className="validate"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>
          <div className="row">

         </div>
           <AgencyForm />
          {/*this.state.type === "agency" ? <AgencyForm />: <span></span> }
          {this.state.type === "fosterAdopter" ? <FadForm />: <span></span> */}
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;

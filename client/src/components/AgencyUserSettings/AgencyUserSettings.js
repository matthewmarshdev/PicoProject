import React, { Component } from "react";
import "./AgencyUserSettings.css";
// import AgencyForm from "../AgencyForm";
import API from "../../utils/API";

class AgencyUserSettings extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    agencyName: "",
    phone: "",
    profit: "",
    duration: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    zip: ""
  };

  componentDidMount() {
    //this is pseudo code localstora
    const email = localStorage.getItem("userEmail");
    API.getUserByEmail(email).then(user => {
      console.log("what is our user now??", user);
      this.setState({
        ...user.data
      });
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    //console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    API.updateUserByEmail(this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    console.log("info is loaded", this.state);
    return (
      <div className="row formRow">
        <form className="col s8">
          <div className="row">
            <h4>User Info</h4>
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
                id="agencyName"
                name="agencyName"
                type="text"
                className="validate"
                value={this.state.agencyName}
                onChange={this.handleInputChange}
                required="required"
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
            <div className="input-field col s12">
              <input
                id="profit"
                name="profit"
                value={this.state.profit}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Profit"
              />
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Is your organization making a profit?
              </span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="duration"
                name="duration"
                value={this.state.duration}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Length of time"
              />
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                How long can you keep dogs if no foster is available?
              </span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="address1"
                name="address1"
                value={this.state.address1}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
              <label htmlFor="address1">Address 1</label>
            </div>
            <div className="input-field col s6">
              <input
                id="address2"
                name="address2"
                value={this.state.address2}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
              <label htmlFor="address2">Address 2</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4">
              <input
                id="state"
                name="state"
                value={this.state.state}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
              <label htmlFor="state">State</label>
            </div>
            <div className="input-field col s4">
              <input
                id="city"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
              <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s4">
              <input
                id="zip"
                name="zip"
                value={this.state.zip}
                onChange={this.handleInputChange}
                type="number"
                className="validate"
              />
              <label htmlFor="zip">Zip</label>
            </div>
          </div>
          <button
            className="green btn waves-effect waves-light"
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

export default AgencyUserSettings;

import React, { Component } from "react";
import "./FadForm.css";
import API from "../../utils/API";

class FadForm extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    agency: "",
    phone: "",
    type: "",
    ofAge: "",
    haveOwned: "",
    unanYes: "",
    fullAvail: "",
    aggroPets: "",
    hasTallFence: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    zip: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // the below api update method doesn't exist yet
    API.updateUser(this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="row formRow">
        <form className="col s8">
          <div className="row">
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
            <p>
              <label>
                <input
                  name="type"
                  type="radio"
                  value="fosterAdopter"
                  checked={this.state.type === "fosterAdopter"}
                  onChange={this.handleInputChange}
                  //defaultChecked="false"
                />
                <span>Foster / Adopter</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="type"
                  type="radio"
                  value="agency"
                  checked={this.state.type === "agency"}
                  onChange={this.handleInputChange}
                  //defaultChecked="false"
                />
                <span>Agency</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input
                  name="ofAge"
                  value="true"
                  //checked={this.state.type === "true"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>18 or older</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="ofAge"
                  value="false"
                  //checked={this.state.type === "false"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Younger than 18</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input
                  name="haveOwned"
                  value="true"
                  //checked={this.state.type === "true"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Owned Dog Before</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="haveOwned"
                  value="false"
                  //checked={this.state.type === "false"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Never Owned Dog</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input
                  name="unanYes"
                  value="true"
                  //checked={this.state.type === "true"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Household agrees with adoption of dog</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="unanYes"
                  value="false"
                  //checked={this.state.type === "false"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Household does not agree with adoption of dog</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input
                  name="fullAvail"
                  value="true"
                  //checked={this.state.type === "true"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Full Availability</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="fullAvail"
                  value="false"
                  //checked={this.state.type === "false"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Part Time Availability</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input
                  name="aggroPets"
                  value="true"
                  //checked={this.state.type === "true"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Has aggressive pets</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="aggroPets"
                  value="false"
                  //checked={this.state.type === "false"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Has no aggressive pets</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input
                  name="hasTallFence"
                  value="tallFence"
                  //checked={this.state.type === "true"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Has a tall fence in yard</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="hasTallFence"
                  value="noTallFence"
                  //checked={this.state.type === "noTallFence"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Has no tall fence in yard</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="hasTallFence"
                  value="noYard"
                  //checked={this.state.type === "noYard"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Has no yard</span>
              </label>
            </p>
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
        </form>
      </div>
    );
  }
}

export default FadForm;

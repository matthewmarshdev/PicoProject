import React, { Component } from "react";
import "./DogCard.css";
import API from "../../utils/API";

class AgencyForm extends Component {
  state = {
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
            <p>
              <label>
                <input
                  name="profit"
                  value="profit"
                  checked={this.state.type === "profit"}
                  onChange={this.handleInputChange}
                  defaultChecked="true"
                  type="radio"
                />
                <span>For Profit</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="profit"
                  value="nonProfit"
                  checked={this.state.type === "nonProfit"}
                  onChange={this.handleInputChange}
                  defaultChecked="false"
                  type="radio"
                />
                <span>Non Profit</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input
                  name="duration"
                  value="long"
                  checked={this.state.type === "long"}
                  onChange={this.handleInputChange}
                  defaultChecked="true"
                  type="radio"
                />
                <span>Long Term</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="duration"
                  value="short"
                  checked={this.state.type === "short"}
                  onChange={this.handleInputChange}
                  defaultChecked="true"
                  type="radio"
                />
                <span>Short Term</span>
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

export default AgencyForm;

import React, { Component } from "react";
import "./DogGeneratorLite.css";
import API from "../../utils/API";

class DogGeneratorLite extends Component {
  state = {
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
    // the below api createDog method doesn't exist yet
    API.createDog(this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  //name, size, breed, weight, sex, pickupDate

  render() {
    return (
      <div className="row formRow">
        <form className="col s8">
        <div className="row">
            <div className="input-field col s6">
              <input
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="breed"
                name="breed"
                value={this.state.breed}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
              <label htmlFor="breed">Breed</label>
            </div>
          </div>
          <div className="row">
            <p>
              <label>
                <input
                  name="size"
                  value="small"
                  checked={this.state.type === "small"}
                  onChange={this.handleInputChange}
                  defaultChecked="true"
                  type="radio"
                />
                <span>Small</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="size"
                  value="medium"
                  checked={this.state.type === "medium"}
                  onChange={this.handleInputChange}
                  defaultChecked="false"
                  type="radio"
                />
                <span>Medium</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="size"
                  value="large"
                  checked={this.state.type === "large"}
                  onChange={this.handleInputChange}
                  defaultChecked="false"
                  type="radio"
                />
                <span>Large</span>
              </label>
            </p>
          </div>
          <div className="row">
            <div className="input-field col s4">
              <input
                id="weight"
                name="weight"
                value={this.state.weight}
                onChange={this.handleInputChange}
                type="number"
                className="validate"
              />
              <label htmlFor="weight">Weight</label>
            </div>
            <div className="input-field col s4">
              <input
                id="Sex"
                name="Sex"
                value={this.state.Sex}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
              <label htmlFor="Sex">Sex</label>
            </div>
            <div className="input-field col s4">
              <input
                id="pickupDate"
                name="pickupDate"
                value={this.state.pickupDate}
                onChange={this.handleInputChange}
                type="number"
                className="validate"
              />
              <label htmlFor="pickupDate">Date Available for Pickup</label>
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

export default DogGeneratorLite;

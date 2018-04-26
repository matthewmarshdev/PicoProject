import React, { Component } from "react";
import "./FadForm.css";

class FadForm extends Component {

  state = {
    ofAge: '',
    haveOwned: '',
    unanYes: '',
    fullAvail: '',
    aggroPets: '',
    hasTallFence: '',
    address1: '',
    address2: '',
    state: '',
    city: '',
    zip: ''
  }

  handleInputChange = (event) => {
    
  }

  handleSubmit = (event) => {
    event.preventDefault();

  }

  render() {
    return (
      <div className="row formRow">
        <form className="col s8">
          <div className="row">
            <p>
              <label>
                <input name="ofAge" type="radio" checked />
                <span>18 or older</span>
              </label>
            </p>
            <p>
              <label>
                <input name="ofAge" type="radio" />
                <span>Younger than 18</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input name="haveOwned" type="radio" checked />
                <span>Owned Dog Before</span>
              </label>
            </p>
            <p>
              <label>
                <input name="haveOwned" type="radio" />
                <span>Never Owned Dog</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input name="unanYes" type="radio" checked />
                <span>Household agrees with adoption of dog</span>
              </label>
            </p>
            <p>
              <label>
                <input name="unanYes" type="radio" />
                <span>Household does not agree with adoption of dog</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input name="fullAvail" type="radio" checked />
                <span>Full Availability</span>
              </label>
            </p>
            <p>
              <label>
                <input name="fullAvail" type="radio" />
                <span>Part Time Availability</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input name="aggroPets" type="radio" checked />
                <span>Has aggressive pets</span>
              </label>
            </p>
            <p>
              <label>
                <input name="aggroPets" type="radio" />
                <span>Has no aggressive pets</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input name="hasTallFence" type="radio" checked />
                <span>Has a tall fence in yard</span>
              </label>
            </p>
            <p>
              <label>
                <input name="hasTallFence" type="radio" />
                <span>Has no tall fence in yard</span>
              </label>
            </p>
            <p>
              <label>
                <input name="hasTallFence" type="radio" />
                <span>Has no yard</span>
              </label>
            </p>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input id="address1" name="address1" value={this.state.address1} onChange={this.handleInputChange} type="text" className="validate" />
            <label htmlFor="address1">Email</label>
          </div>
          <div className="input-field col s6">
            <input id="address2" name="address2" value={this.state.address2} onChange={this.handleInputChange} type="text" className="validate" />
            <label htmlFor="address2">Password</label>
          </div>
        </div>
          <div className="row">
          <div className="input-field col s4">
            <input id="state" name="state" value={this.state.state} onChange={this.handleInputChange} type="text" className="validate" />
            <label htmlFor="state">First Name</label>
          </div>
          <div className="input-field col s4">
            <input id="city" name="city" value={this.state.city} onChange={this.handleInputChange} type="text" className="validate" />
            <label htmlFor="city">Last Name</label>
          </div>
          <div className="input-field col s4">
            <input id="zip" name="zip" value={this.state.zip} onChange={this.handleInputChange} type="number" className="validate" />
            <label htmlFor="zip">Agency Name (optional)</label>
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

export default FadForm;

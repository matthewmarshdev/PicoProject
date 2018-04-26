import React, { Component } from "react";
import "./AgencyForm.css";

class AgencyForm extends Component {

  state = {
    profit: '',
    duration: '',
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
                <input name="profit" type="radio" checked="true" />
                <span>For Profit</span>
              </label>
            </p>
            <p>
              <label>
                <input name="profit" type="radio" />
                <span>Non Profit</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input name="duration" type="radio" checked="true" />
                <span>Long Term</span>
              </label>
            </p>
            <p>
              <label>
                <input name="duration" type="radio" />
                <span>Short Term</span>
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

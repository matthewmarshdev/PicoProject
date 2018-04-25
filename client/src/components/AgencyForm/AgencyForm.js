import React, { Component } from "react";
import "./AgencyForm.css";

class AgencyForm extends Component {
  render() {
    return (
      <div className="row formRow">
        <form className="col s8">
          <div className="row">
            <p>
              <label>
                <input name="profit" type="radio" checked />
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
                <input name="duration" type="radio" checked />
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
              <input id="address1" type="text" className="validate" />
              <label htmlFor="address1">Email</label>
            </div>
            <div className="input-field col s6">
              <input id="address2" type="text" className="validate" />
              <label htmlFor="address2">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4">
              <input id="state" type="text" className="validate" />
              <label htmlFor="state">First Name</label>
            </div>
            <div className="input-field col s4">
              <input id="city" type="text" className="validate" />
              <label htmlFor="city">Last Name</label>
            </div>
            <div className="input-field col s4">
              <input id="zip" type="number" className="validate" />
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

export default AgencyForm;

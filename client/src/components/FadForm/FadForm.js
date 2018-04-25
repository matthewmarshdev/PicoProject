import React, { Component } from "react";
import "./FadForm.css";

class FadForm extends Component {
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

export default FadForm;

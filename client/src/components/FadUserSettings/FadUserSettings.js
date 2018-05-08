import React, { Component } from "react";
import "./FadUserSettings.css";
import FadForm from "../FadForm";
import API from "../../utils/API";



class FadUserSettings extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        agencyName: "",
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
        return <div className="row formRow">
            <h2>Foster/Adopter User Settings</h2>
            <form className="col s8">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="email_inline" name="email" type="email" value={this.state.email} onChange={this.handleInputChange} className="validate" />
                        <label htmlFor="email_inline">Email</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} className="validate" />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="firstName" name="firstName" type="text" value={this.state.firstName} onChange={this.handleInputChange} className="validate" />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="lastName" name="lastName" type="text" value={this.state.lastName} onChange={this.handleInputChange} className="validate" />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="agency" name="agency" type="text" className="validate" value={this.state.agency} onChange={this.handleInputChange} />
                        <label htmlFor="agency">Agency Name (optional)</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="phone" name="phone" type="tel" className="validate" value={this.state.phone} onChange={this.handleInputChange} />
                        <label htmlFor="phone">Phone</label>
                    </div>
                </div>
                <div className="row">
                    <p>
                        <label>
                            <input name="type" type="radio" value="fosterAdopter" checked={this.state.type === "fosterAdopter"} onChange={this.handleInputChange} />
                            <span>Foster / Adopter</span>
                        </label>
                    </p>
                </div>
                <FadForm />
                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleSubmit}>
                    Update info
          </button>
            </form>
        </div>;
    }
}

export default FadUserSettings;

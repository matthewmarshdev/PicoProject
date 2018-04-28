import React, { Component } from "react";
import "./FadNav.css";

class FadNav extends Component {
  render() {
    return (
      <div className="navBackground">
        <button className="navButton">
          <i className="material-icons white-text medium">home</i>
          <br />
          Home
        </button>
        <button className="navButton">
          <i className="material-icons white-text medium">pets</i>
          <br />
          All Dogs
        </button>
        <button className="navButton">
          <i className="material-icons white-text medium">search</i>
          <br />
          Search Dogs
        </button>
        <button className="navButton">
          <i className="material-icons white-text medium">account_circle</i>
          <br />
          User Information
        </button>
      </div>
    );
  }
}

export default FadNav;

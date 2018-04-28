import React, { Component } from "react";
import "./AgencyNav.css";

class AgencyNav extends Component {
  render() {
    return (
      <div className="navBackground">
        <button className="navButton">
          <i className="material-icons white-text medium">edit</i>
          <br />
          Compose Dog
        </button>
        <button className="navButton">
          <i className="material-icons white-text medium">pets</i>
          <br />
          All Dogs
        </button>
        <button className="navButton">
          <i className="material-icons white-text medium">report_problem</i>
          <br />
          Incomplete Dogs
        </button>
        <button className="navButton">
          <i className="material-icons white-text medium">check_box</i>
          <br />
          Complete Dogs
        </button>
        <button className="navButton">
          <i className="material-icons white-text medium">mood</i>
          <br />
          Fostered / Adoped Dogs
        </button>
        <button className="navButton">
          <i className="material-icons white-text medium">swap_horiz</i>
          <br />
          Transferred Dogs
        </button>
        <button className="navButton">
          <i className="material-icons white-text medium">account_circle</i>
          <br />
          Agency Information
        </button>
      </div>
    );
  }
}

export default AgencyNav;

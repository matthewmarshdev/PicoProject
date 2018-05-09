import React from "react";
import { Link } from "react-router-dom";
import "./LgnSgnUpBtn.css";

const LgnSgnUpBtn = () => (
  <div className="row">
    <div className="col s4 offset-s4">
      <Link to="/login">
        <a className="waves-effect waves-light btn-large green">Agency Login</a>
      </Link>
      <Link to="/signup">
        <a className="waves-effect waves-light btn-large green">Agency Sign Up</a>
      </Link>
      <Link to="/faddash">
        <a className="waves-effect waves-light btn-large green">Foster/Adopt</a>
      </Link>
      <Link to="/about">
        <a className="waves-effect waves-light btn-large green">About</a>
      </Link>
    </div>
  </div>
);

export default LgnSgnUpBtn;

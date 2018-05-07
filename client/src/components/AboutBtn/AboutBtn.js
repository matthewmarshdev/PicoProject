import React from "react";
import { Link } from "react-router-dom";
import "./AboutBtn.css";

const AboutBtn = () => (
  <div className="row">
    <div className="col s4 offset-s4">
      <Link to="/about">
        <a className="waves-effect waves-light btn-large">About</a>
      </Link>
    </div>
  </div>
);

export default AboutBtn;

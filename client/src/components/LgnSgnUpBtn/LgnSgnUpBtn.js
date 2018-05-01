import React from "react";
import { Link } from "react-router-dom";
import "./LgnSgnUpBtn.css";

const LgnSgnUpBtn = () => (
  <div>
    <Link to="/login">
    <a className="waves-effect waves-light btn-large">Login</a>
    </Link>
    <Link to="/signup">
    <a className="waves-effect waves-light btn-large">Sign Up</a>
    </Link>
  </div>
);

export default LgnSgnUpBtn;

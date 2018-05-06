import React from "react";
import "./Logo.css";
import pico from "./pico.png";

const Logo = () => (
  <div className="row">
    <div className="col s3 offset-s4">
      <img src={pico} alt="Pico Project Logo" />
    </div>
  </div>
);

export default Logo;

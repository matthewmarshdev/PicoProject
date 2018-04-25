import React from "react";
import "./Logo.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Logo = () => (
  <div>
    <img src='https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&h=350' alt='Pico Project Logo'/>
  </div>
);

export default Logo;
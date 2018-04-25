import React from "react";
import "./SplashHeader.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SplashHeader = () => (
  <nav>
  <div className='nav-wrapper'>
    <h2 className='title'>The Pico Project</h2>
  </div>
  </nav>
);

export default SplashHeader;
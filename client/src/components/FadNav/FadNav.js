import React, { Component } from "react";
import "./FadNav.css";

class FadNav extends Component {
  render() {
    return (
      <div className="navBackground z-depth-2">
        <button className="navButton green darken-2">
          <i className="material-icons white-text medium">pets</i>
          <br />
          All Dogs
        </button>
        <button className="navButton green darken-2" onClick={this.props.componentsSearchClick}>
          <i className="material-icons white-text medium">search</i>
          <br />
          Search Dogs
        </button>
      </div>
    );
  }
}

export default FadNav;

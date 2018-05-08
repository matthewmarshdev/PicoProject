import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    searchBreeds: ""
  };

  handleInputChange(searchBreeds) {
    this.setState({ searchBreeds });
    //run runSearch method pased in as a prop
    this.props.runSearch(searchBreeds);
  };


  render() {
    return (
      <input 
          type="text"
          placeholder="Search Bar"
          value={this.state.searchBreed}
          //run this event later when they input value is changed
          //event.target is actual element that trigger the click
          //Onchange will take in what event the user puts, when they do, will kick off on change of the input field. From there grab the state of which and give it event.target.value
          onChange={(event) => this.handleInputChange(event.target.value)}
         />
    );
  }
}

export default SearchBar;

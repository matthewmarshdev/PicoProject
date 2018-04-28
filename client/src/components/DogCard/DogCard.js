import React, { Component } from "react";
import "./DogCard.css";
import API from "../../utils/API";

class DogCard extends Component {
  state = {
    
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // the below api update method doesn't exist yet
    API.updateUser(this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        
      </div>
    );
  }
}

export default DogCard;

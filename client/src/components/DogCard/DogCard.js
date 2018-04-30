import React, { Component } from "react";
import "./DogCard.css";
import API from "../../utils/API";

class DogCard extends Component {
  state = {
    
  };

  render() {
    return (
      <div className="col s8">
        <span className="cardElement">{this.props.name}</span><br />
        <img src={this.props.img} /><br />
        <span className="cardElement">Sex: {this.props.sex} </span>
        <span className="cardElement">Age: {this.props.age}</span><br />
        <span className="cardElement">Breed: {this.props.breed} </span>
        <span className="cardElement">Size: {this.props.size}</span><br />
        <span className="cardElement">Weight: {this.props.weight} </span>
        <span className="cardElement">Temperment: {this.props.temperment}</span><br />
        <span className="cardElement">Neutered: {this.props.isChopped} </span>
        <span className="cardElement">Chipped: {this.props.isChipped} </span>
        <span className="cardElement">Vaccinated: {this.props.hasVacc}</span><br />
        <span className="cardElement">Story: {this.props.story}</span>
      </div>
    );
  }
}

export default DogCard;

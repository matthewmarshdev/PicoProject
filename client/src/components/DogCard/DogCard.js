import React, { Component } from "react";
import "./DogCard.css";

class DogCard extends Component {
  state = {
    
  };

  render() {
    return (
      <div className="col m6 s12">
        <div className="card">
          <div className="card-image">
            <img alt={this.props.name} src={this.props.image} />
            <span className="card-title">{this.props.name}</span>
          </div>
          <div className="card-content">
            <p>Sex: {this.props.sex} </p>
            <p>Age: {this.props.age}</p>
            <p>Breed: {this.props.breed} </p>
            <p>Size: {this.props.size}</p>
            <p>Weight: {this.props.weight} </p>
            <p>Temperment: {this.props.temperment}</p>
            <p>Neutered: {this.props.isChopped} </p>
            <p>Chipped: {this.props.isChipped} </p>
            <p>Vaccinated: {this.props.hasVacc}</p>
            <p>Story: {this.props.story}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DogCard;

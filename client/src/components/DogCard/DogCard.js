import React, { Component } from "react";
import "./DogCard.css";

class DogCard extends Component {
  state = {};

  render() {
    return (
      <div className="row">
        <div className="col s6">
          <div className="card">
            <div className="card-image">
              <img alt={this.props.name} src={this.props.image} />
              <span className="card-title">{this.props.name}</span>
            </div>
            <div className="card-content">
              <p className="cardElement">Sex: {this.props.sex} </p>
              <p className="cardElement">Age: {this.props.age}</p>
              <br />
              <p className="cardElement">Breed: {this.props.breed} </p>
              <p className="cardElement">Size: {this.props.size}</p>
              <br />
              <p className="cardElement">Weight: {this.props.weight} </p>
              <p className="cardElement">Temperment: {this.props.temperment}</p>
              <br />
              <p className="cardElement">Neutered: {this.props.isChopped} </p>
              <p className="cardElement">Chipped: {this.props.isChipped} </p>
              <p className="cardElement">Vaccinated: {this.props.hasVacc}</p>
              <br />
              <p className="cardElement">Story: {this.props.story}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DogCard;

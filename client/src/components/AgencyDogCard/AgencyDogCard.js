import React from "react";
import "./AgencyDogCard.css";

// import API from "../../utils/API";

const AgencyDogCard = props => {
  return (
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img alt={props.name} src={props.image} />
            <span className="card-title">{props.name}</span>
          </div>
          <div className="card-content">
            <p>Sex: {props.sex} </p>
            <p>Age: {props.age}</p>
            <p>Breed: {props.breed} </p>
            <p>Size: {props.size}</p>
            <p>Weight: {props.weight} </p>
            <p>Temperment: {props.temperment}</p>
            <p>Neutered: {props.isChopped} </p>
            <p>Chipped: {props.isChipped} </p>
            <p>Vaccinated: {props.hasVacc}</p>
            {/* here, status has been added as a card element */}
            <p>Status: {props.status}</p>
            <p>Story: {props.story}</p>
          </div>
        </div>
      </div>
  );
};

export default AgencyDogCard;

import React from "react";
import "./AgencyDogCard.css";
// import API from "../../utils/API";

const AgencyDogCard = props => {
  return (
    <div className="col s8">
      <span className="cardElement">{props.name}</span>
      <br />
      <img alt="dog" src={props.img} />
      <br />
      <span className="cardElement">Sex: {props.sex} </span>
      <span className="cardElement">Age: {props.age}</span>
      <br />
      <span className="cardElement">Breed: {props.breed} </span>
      <span className="cardElement">Size: {props.size}</span>
      <br />
      <span className="cardElement">Weight: {props.weight} </span>
      <span className="cardElement">Temperment: {props.temperment}</span>
      <br />
      <span className="cardElement">Neutered: {props.isChopped} </span>
      <span className="cardElement">Chipped: {props.isChipped} </span>
      <span className="cardElement">Vaccinated: {props.hasVacc}</span>
      <br />
      <span className="cardElement">Story: {props.story}</span>
    </div>
  );
};

export default AgencyDogCard;

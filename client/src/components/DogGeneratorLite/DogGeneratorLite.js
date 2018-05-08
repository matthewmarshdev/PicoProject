import React, { Component } from "react";
import "./DogGeneratorLite.css";
import API from "../../utils/API";

class DogGeneratorLite extends Component {
  state = {
    name: "",
    size: "",
    breed: "",
    weight: "",
    sex: "",
    pickupDate: "",
    temperment: "",
    isChopped: "",
    isChipped: "",
    hasVacc: "",
    story: "",
    status: "",
    image: ""
  };

  componentWillReceiveProps = nextProps => {
    console.log("props are here?", nextProps.dog);
    this.setState({
      ...nextProps.dog
    });
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
    // the below api createDog method doesn't exist yet
    API.addDog(this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleUpdate = event => {
    event.preventDefault();
    console.log(this.state);
    // the below api createDog method doesn't exist yet
    API.updateDogbyId(this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="row formRow">
        <h2> Dog Info </h2>
        <form className="col s8">
          <div className="row">
            <div className="input-field col s6">
<<<<<<< HEAD
<<<<<<< HEAD
              <input
                placeholder="Name"
=======
              <input
>>>>>>> e790a885a6089bbcf9d628795dfd06cfd39f65d6
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                type="text"
<<<<<<< HEAD
                className="validate"
              />
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Breed"
                id="breed"
                name="breed"
                value={this.state.breed}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
=======
              <input id="name" name="name" value={this.state.name} onChange={this.handleInputChange} type="text" className="validate" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s6">
              <input id="breed" name="breed" value={this.state.breed} onChange={this.handleInputChange} type="text" className="validate" />
              <label htmlFor="breed">Breed</label>
>>>>>>> 27edf2252dd16d6ee8aa77e5f24383de13ca180c
            </div>
          </div>
          <div className="row">
            <p>
              <label>
                <input name="size" value="small" onChange={this.handleInputChange 
                  } defaultChecked="" type="radio" />
                <span>Small</span>
              </label>
            </p>
            <p>
              <label>
                <input name="size" value="medium" onChange={this.handleInputChange 
                  } defaultChecked="" type="radio" />
                <span>Medium</span>
              </label>
            </p>
            <p>
              <label>
                <input name="size" value="large" onChange={this.handleInputChange
                  } defaultChecked="" type="radio" />
                <span>Large</span>
              </label>
            </p>
          </div>
          <div className="row">
            <div className="input-field col s4">
<<<<<<< HEAD
              <input
                placeholder="Weight"
                id="weight"
                name="weight"
                value={this.state.weight}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
            </div>
            <div className="input-field col s4">
              <input
                placeholder="Sex"
                id="sex"
                name="sex"
                value={this.state.sex}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
            </div>
            <div className="input-field col s4">
              <input
                placeholder="Temperament"
                id="temperment"
                name="temperment"
                value={this.state.temperment}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
=======
              <input id="weight" name="weight" value={this.state.weight} onChange={this.handleInputChange} type="text" className="validate" />
              <label htmlFor="weight">Weight</label>
=======
                placeholder="Name"
                // className="validate"
              />
              {/* <label htmlFor="name">Name</label> */}
            </div>
            <div className="input-field col s6">
              <input
                id="breed"
                name="breed"
                value={this.state.breed}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Breed"
                // className="validate"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s3">
              <input
                id="size"
                name="size"
                value={this.state.size}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
                placeholder="Size"
              />
              <span className="helper-text" data-error="wrong" data-success="right">Sm-Md-Lrg</span>

>>>>>>> e790a885a6089bbcf9d628795dfd06cfd39f65d6
            </div>
            <div className="input-field col s3">
              <input
                id="weight"
                name="weight"
                value={this.state.weight}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
                placeholder="Weight"
              />
                <span className="helper-text" data-error="wrong" data-success="right">Pounds</span>

            </div>
<<<<<<< HEAD
            <div className="input-field col s4">
              <input id="temperment" name="temperment" value={this.state.temperment} onChange={this.handleInputChange} type="text" className="validate" />
              <label htmlFor="temperment">Temperment</label>
>>>>>>> 27edf2252dd16d6ee8aa77e5f24383de13ca180c
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
<<<<<<< HEAD
              <input
                placeholder="Available Pickup Date"
                id="pickupDate"
                name="pickupDate"
                value={this.state.pickupDate}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
=======
              <input id="pickupDate" name="pickupDate" value={this.state.pickupDate} onChange={this.handleInputChange} type="text" className="validate" />
              <label htmlFor="pickupDate">Date Available for Pickup</label>
>>>>>>> 27edf2252dd16d6ee8aa77e5f24383de13ca180c
=======
            <div className="input-field col s3">
              <input
                id="sex"
                name="sex"
                value={this.state.sex}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
                placeholder="Sex"
              />
              <span className="helper-text" data-error="wrong" data-success="right">Male or Female</span>

            </div>
            <div className="input-field col s3">
              <input
                id="temperment"
                name="temperment"
                value={this.state.temperment}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
                placeholder="Temperment"
              />
              <span className="helper-text" data-error="wrong" data-success="right">Personality of Dog</span>

>>>>>>> e790a885a6089bbcf9d628795dfd06cfd39f65d6
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4">
              <input
                id="isChopped" 
                name="isChopped"
                value={this.state.isChopped}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Neutered"
                />
                <span className="helper-text" data-error="wrong" data-success="right">Spayed or Neutered</span>
            </div>
            <div className="input-field col s4">
              <input
                id="isChipped"
                name="isChipped"
                value={this.state.isChipped}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Micro Chipped"
                />
                <span className="helper-text" data-error="wrong" data-success="right">Micro Chipped #</span>

            </div>
            <div className="input-field col s4">
              <input
                id="isVacc"
                name="isVacc"
                value={this.state.isVacc}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Any Vaccinations"
                />
                <span className="helper-text" data-error="wrong" data-success="right">List Vaccinations</span>

            </div>
          </div>
          <div className="row">
<<<<<<< HEAD
            <div className="col s8">
<<<<<<< HEAD
              <input
                placeholder="Story"
=======
            <div className="col s12">
              <input
                placeholder="Story of this dog"
>>>>>>> e790a885a6089bbcf9d628795dfd06cfd39f65d6
                id="story"
                name="story"
                value={this.state.story}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
<<<<<<< HEAD
=======
              <input placeholder="Story" id="story" name="story" value={this.state.story} onChange={this.handleInputChange} type="text" className="validate" />
              <label htmlFor="story">Include the Dog's Story Here</label>
>>>>>>> 27edf2252dd16d6ee8aa77e5f24383de13ca180c
            </div>
          </div>
          <div className="row">
            <div className="col s8">
<<<<<<< HEAD
              <input
                placeholder="Image Url"
=======
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="pickupDate"
                name="pickupDate"
                value={this.state.pickupDate}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
                placeholder="Pickup Date (YYYY/MMD/D) (Military Time)"
              />
              <span className="helper-text" data-error="wrong" data-success="right">Example: 2018-06-04T06:00:00.000Z</span>

            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <input
>>>>>>> e790a885a6089bbcf9d628795dfd06cfd39f65d6
                id="image"
                name="image"
                value={this.state.image}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
<<<<<<< HEAD
              />
=======
              <input id="image" name="image" value={this.state.image} onChange={this.handleInputChange} type="text" className="validate" />
              <label htmlFor="image">Paste Image URL Here</label>
>>>>>>> 27edf2252dd16d6ee8aa77e5f24383de13ca180c
=======
                placeholder="JPEG, PNG, JPG"
              />
              <span className="helper-text" data-error="wrong" data-success="right">Upload</span>

>>>>>>> e790a885a6089bbcf9d628795dfd06cfd39f65d6
            </div>
          </div>
          <div className="row">
            <p>
              <label>
                <input
                  name="status"
                  value="complete"
                  //checked={this.state.type === "complete"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Complete</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="status"
                  value="fostered"
                  //checked={this.state.type === "fostered"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Fostered</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="status"
                  value="transferred"
                  //checked={this.state.type === "transferred"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Transferred</span>
              </label>
            </p>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={this.handleSubmit}
          >
            Submit Dog
          </button>
          <button
            className="btn waves-effect waves-light-2"
            type="submit"
            name="action"
            onClick={this.handleSubmit}
          >
            Update Dog
          </button>
        </form>
      </div>
    );
  }
}

export default DogGeneratorLite;

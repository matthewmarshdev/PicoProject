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

  //name, size, breed, weight, sex, pickupDate

  //temperment, isChopped, isChipped, hasVacc, story

  //TODO: create field for dog image url

  render() {
    console.log("whaaatt", this.props);
    return <div className="row formRow">
        <h2> Dog Info </h2>
        <form className="col s8">
          <div className="row">
            <div className="input-field col s6">
              <input id="name" name="name" value={this.state.name} onChange={this.handleInputChange} type="text" className="validate" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s6">
              <input id="breed" name="breed" value={this.state.breed} onChange={this.handleInputChange} type="text" className="validate" />
              <label htmlFor="breed">Breed</label>
            </div>
          </div>
          <div className="row">
            <p>
              <label>
                <input name="size" value="small" onChange={this.handleInputChange //checked={this.state.type === "small"}
                  } defaultChecked="" type="radio" />
                <span>Small</span>
              </label>
            </p>
            <p>
              <label>
                <input name="size" value="medium" onChange={this.handleInputChange //checked={this.state.type === "medium"}
                  } defaultChecked="" type="radio" />
                <span>Medium</span>
              </label>
            </p>
            <p>
              <label>
                <input name="size" value="large" onChange={this.handleInputChange //checked={this.state.type === "large"}
                  } defaultChecked="" type="radio" />
                <span>Large</span>
              </label>
            </p>
          </div>
          <div className="row">
            <div className="input-field col s4">
              <input id="weight" name="weight" value={this.state.weight} onChange={this.handleInputChange} type="text" className="validate" />
              <label htmlFor="weight">Weight</label>
            </div>
            <div className="input-field col s4">
              <input id="sex" name="sex" value={this.state.sex} onChange={this.handleInputChange} type="text" className="validate" />
              <label htmlFor="sex">Sex</label>
            </div>
            <div className="input-field col s4">
              <input id="temperment" name="temperment" value={this.state.temperment} onChange={this.handleInputChange} type="text" className="validate" />
              <label htmlFor="temperment">Temperment</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input id="pickupDate" name="pickupDate" value={this.state.pickupDate} onChange={this.handleInputChange} type="text" className="validate" />
              <label htmlFor="pickupDate">Date Available for Pickup</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4">
              <p>
                <label>
                  <input name="isChopped" value="true" checked={this.state.isChopped === "true"} onChange={this.handleInputChange} type="radio" />
                  <span>Neutered</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="isChopped" value="false" checked={this.state.isChopped === "false"} onChange={this.handleInputChange} type="radio" />
                  <span>Not Neutered</span>
                </label>
              </p>
            </div>
            <div className="input-field col s4">
              <p>
                <label>
                  <input name="isChipped" value="true" checked={this.state.isChipped === "true"} onChange={this.handleInputChange} type="radio" /> 
                  
                  <span>Has Chip</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="isChipped" value="false" checked={this.state.isChipped === "false"} onChange={this.handleInputChange} type="radio" />
                  <span>Has No Chip</span>
                </label>
              </p>
            </div>
            <div className="input-field col s4">
              <p>
                <label>
                  <input name="hasVacc" value="true" checked={this.state.hasVacc === "true"} onChange={this.handleInputChange} type="radio" />
                  <span>Vaccinated</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="hasVacc" value="false" checked={this.state.hasVacc === "false"} onChange={this.handleInputChange} type="radio" />
                  <span>Not Vaccinated</span>
                </label>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col s8">
              <input placeholder="Story" id="story" name="story" value={this.state.story} onChange={this.handleInputChange} type="text" className="validate" />
              <label htmlFor="story">Include the Dog's Story Here</label>
            </div>
          </div>
          <div className="row">
            <div className="col s8">
              <input id="image" name="image" value={this.state.image} onChange={this.handleInputChange} type="text" className="validate" />
              <label htmlFor="image">Paste Image URL Here</label>
            </div>
          </div>
          <div className="row">
            <p>
              <label>
                <input name="status" value="complete" onChange={this.handleInputChange //checked={this.state.type === "complete"}
                  } defaultChecked="" type="radio" />
                <span>Complete</span>
              </label>
            </p>
            <p>
              <label>
                <input name="status" value="fostered" onChange={this.handleInputChange //checked={this.state.type === "fostered"}
                  } defaultChecked="" type="radio" />
                <span>Fostered</span>
              </label>
            </p>
            <p>
              <label>
                <input name="status" value="transferred" onChange={this.handleInputChange //checked={this.state.type === "transferred"}
                  } defaultChecked="" type="radio" />
                <span>Transferred</span>
              </label>
            </p>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleSubmit}>
            Submit New Dog
          </button>
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleUpdate}>
            Update Dog
          </button>
        </form>
      </div>;
  }
}

export default DogGeneratorLite;

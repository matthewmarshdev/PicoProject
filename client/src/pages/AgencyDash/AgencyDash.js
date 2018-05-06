import React, { Component } from "react";
import SplashHeader from "../../components/SplashHeader";
import AgencyForm from "../../components/AgencyForm";
import AgencyNav from "../../components/AgencyNav";
import AgencyDogCard from "../../components/AgencyDogCard";
import DogGeneratorLite from "../../components/DogGeneratorLite";
import API from "../../utils/API";

class AgencyDash extends Component {

// here , we created a state where dog seed schema (all of the dogs) populates the array of visual dogs.
  state = {
    filteredDogs: []
  };

  // Data is pulled on component did mount -- then set to state
  componentDidMount() {
    API.getDogs().then(dogs => {
      this.setState({
        dogs: dogs.data,
        visualDogs: dogs.data,
        editDog: null
       })
    }) 
  }

// here, the visual dog array populates the "temp" array based on the status, which acts as a filter. If the "all" value is targeted (upon click), all the dogs will populate. If not, we will look to the status within each object to filter out which object(s) will populate upon the click of each button
  sideClick = event => {
    const { value } = event.target;
    const { dogs } = this.state;

    let visualDogs = dogs;
    if (value) visualDogs = dogs.filter(dog => dog.status === value);
      this.setState({
        visualDogs
      });
  }

  renderDogCards = dogs => {
    return dogs.map((dog, i) => (
      <AgencyDogCard
        key={dog.id + ' ' + i}
        name={dog.name}
        sex={dog.sex}
        age={dog.age}
        weight={dog.weight}
        temperment={dog.temperment}
        breed={dog.breed}
        story={dog.story}
        status={dog.status}
        onClick={e => this.populateToForm(e, dog)}
      />
    ))
  }

  populateToForm = (e, editDog) => {
    this.setState({ editDog });
  }

  render() {
    const { visualDogs } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row">
            <SplashHeader />
            <div className="input-field col s2">

{/*  Here, we add the side click function and the establish the visualDogs array as what is being mapped. */}
              <AgencyNav click={this.sideClick}/>
            </div>
            <div className="input-field col s8">
              <DogGeneratorLite dog={this.state.editDog} />
              <AgencyForm />
              { visualDogs ? this.renderDogCards(visualDogs) : <div>Loading Doge</div> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AgencyDash;
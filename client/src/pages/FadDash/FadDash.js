import React, { Component } from "react";
import SplashHeader from "../../components/SplashHeader";
import FadForm from "../../components/FadForm";
import FadNav from "../../components/FadNav";
import DogCard from "../../components/DogCard";
import API from "../../utils/API";

class FadDash extends Component {

state = {
  filteredDogs: []
};

componentDidMount() {
  API.getDogs().then(dogs => {
    this.setState({
      dogs: dogs.data,
      visualDogs: dogs.data
     })
  }) 
}

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
    <DogCard
      key={dog.id + ' ' + i}
      name={dog.name}
      sex={dog.sex}
      age={dog.age}
      weight={dog.weight}
      temperment={dog.temperment}
      breed={dog.breed}
      story={dog.story}
      status={dog.status}
    />
  ))
}

  render() {
    const { visualDogs } = this.state
    return (
      <div>
        <div className="container">
          <div className="row">
            <SplashHeader />
            <div className="input-field col s2">
              <FadNav />
            </div>
            <div className="input-field col s8">
              { visualDogs ? this.renderDogCards(visualDogs) : <div>Loading Doge</div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FadDash;

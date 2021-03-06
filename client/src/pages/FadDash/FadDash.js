import React, { Component } from "react";
import SplashHeader from "../../components/SplashHeader";
import FadNav from "../../components/FadNav";
import DogCard from "../../components/DogCard";
import API from "../../utils/API";
import FadUserSettings from "../../components/FadUserSettings";
import SearchBar from "../../components/SearchBar"

class FadDash extends Component {

state = {
  visualDogs: [],
  willRenderSearchBar: false,
  willRenderUserSettings: false,
  breeds: ""
};

runSearch(searchBreeds) {
  API.getDogsById(breeds => {
    this.setState({
      breeds: breeds
    })
  });
}

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

  componentsSearchClick = () => {
    this.setState({
      willRenderSearchBar: true,
      willRenderUserSettings: false
    });
  };

  componentsUserClick = () => {
    this.setState({
      willRenderSearchBar: false,
      willRenderUserSettings: true
    });
  };

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
      image={dog.image}
      story={dog.story}
      status={dog.status}
    />
  ))
}

  render() {
    const { visualDogs } = this.state
    return <div>
        <div className="container">
          <div className="row">
            <SplashHeader />
            <div className="input-field col s2">
              <FadNav click={this.sideClick} componentsUserClick={this.componentsUserClick} componentsSearchClick={this.componentsSearchClick} />
            </div>
            <div className="input-field col s8">
              <h3>Here's who you can help!</h3>
              {this.state.willRenderSearchBar ? <SearchBar placeholder="Search by Breed" runSearch={this.runSearch.bind(this)}/> : <div />}
              {this.state.willRenderUserSettings ? <FadUserSettings /> : <div />}
              <br />
              <br />
              {visualDogs ? this.renderDogCards(visualDogs) : <div>
                  Loading Doggies!
                </div>}
            </div>
          </div>
        </div>
      </div>;
  }
}

export default FadDash;

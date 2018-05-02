import React, { Component } from "react";
import SplashHeader from "../../components/SplashHeader";
import AgencyForm from "../../components/AgencyForm";
import AgencyNav from "../../components/AgencyNav";
import AgencyDogCard from "../../components/AgencyDogCard";
import dogSeed from "./seed.json";

class AgencyDash extends Component {

// here , we created a state where dog seed schema (all of the dogs) populates the array of visual dogs.
  state = {
    dogSeed,
    visualDogs: []
  };

// here, the visual dog array populates the "temp" array based on the status, which acts as a filter. If the "all" value is targeted (upon click), all the dogs will populate. If not, we will look to the status within each object to filter out which object(s) will populate upon the click of each button
  sideClick = event => {
    var temp = [];
    if (event.target.value == "all") {
      this.setState({
        visualDogs: dogSeed
      })
    } else {
      this.state.dogSeed.forEach(obj => {
        if (obj.status == event.target.value) {
          temp.push(obj);
        }
      })
      this.setState({
        visualDogs: temp
      })
    }
  }

  render() {
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
              <AgencyForm />
              {this.state.visualDogs.map(dog => (
                <AgencyDogCard
                  key={dog.id}
                  name={dog.name}
                  sex={dog.sex}
                  age={dog.age}
                  weight={dog.weight}
                  temperment={dog.temperment}
                  breed={dog.breed}
                  story={dog.story}
                  status={dog.status}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default AgencyDash;
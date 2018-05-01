import React, { Component } from "react";
import SplashHeader from "../../components/SplashHeader";
import AgencyForm from "../../components/AgencyForm";
import AgencyNav from "../../components/AgencyNav";
import AgencyDogCard from "../../components/AgencyDogCard";
import dogSeed from "./seed.json";

class AgencyDash extends Component {
  state = {
    dogSeed
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <SplashHeader />
            <div className="input-field col s2">
              <AgencyNav />
            </div>
            <div className="input-field col s8">
              <AgencyForm />
              {this.state.dogSeed.map(dog => (
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

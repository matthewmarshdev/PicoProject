import React, { Component } from "react";
import SplashHeader from "../../components/SplashHeader";
import AgencyForm from "../../components/AgencyForm";
import AgencyNav from "../../components/AgencyNav";
import AgencyDogCard from "../../components/AgencyDogCard";
import API from "../../utils/API.js";
import dummyDog from "../../dogInfo.js";

class AgencyDash extends Component {
  state = {
    filteredDogs: []
  };

  addDog = () => {
    const randoDog = dummyDog[Math.floor(Math.random() * dummyDog.length - 1)];
    API.addDog(randoDog).then(() => console.log("working"));
  };

  showAllDogs = () => {
    API.getDogs().then(dogs => {
      console.log("we have dogs back", dogs);
      this.setState({ dogs: dogs.data });
    });
  };

  filterDogs = e => {
    const { dogs } = this.state;
    const { value } = e.target;
    const filteredDogs = dogs.filter(dog => dog.status === value);
    console.log("Waht is our filtred dogs", filteredDogs);

    //now we set our filtered dogs to state...
    //then we can map over that
    this.setState({
      filteredDogs
    });
  };

  render() {
    const { filteredDogs } = this.state;
    return (
      <div>
        <SplashHeader />
        <AgencyForm />
        <button type="button" onClick={this.addDog}>
          {" "}
          Add Dog{" "}
        </button>

        <button type="button" onClick={this.showAllDogs}>
          {" "}
          Show Dogs{" "}
        </button>

        <button type="button" value="fostered" onClick={this.filterDogs}>
          {" "}
          Show Fostered Dogs{" "}
        </button>

        <button type="button" value="adopted" onClick={this.filterDogs}>
          {" "}
          Show Adopted Dogs{" "}
        </button>

        <button type="button" value="incomplete" onClick={this.filterDogs}>
          {" "}
          Show Imcomplete Dogs{" "}
        </button>

        <button type="button" value="complete" onClick={this.filterDogs}>
          {" "}
          Show Complete Dogs{" "}
        </button>

        <button type="button" value="transferred" onClick={this.filterDogs}>
          {" "}
          Show Transferred Dogs{" "}
        </button>

        <div>
          {filteredDogs
            ? filteredDogs.map(dog => <div key={dog}>{dog.name}</div>)
            : null}
        </div>
      </div>
    );
  }
}

export default AgencyDash;

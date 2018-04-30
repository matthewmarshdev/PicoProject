import React, { Component } from "react";
import SplashHeader from "../../components/SplashHeader";
import FadForm from "../../components/FadForm";
import FadNav from "../../components/FadNav";
import Logo from "../../components/Logo";
import DogCard from "../../components/DogCard";

class FadDash extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <SplashHeader />
            <div className="input-field col s2">
              <FadNav />
            </div>
            <div className="input-field col s8">
              <FadForm />
              <DogCard
                img="http://dummygallery.com/wp-content/uploads/2015/06/funny-retarded-dog-pictures.jpg"
                story="Has Syphilis"
                hasVacc="true"
                isChipped="true"
                isChopped="true"
                age="8 years"
                temperment="Special"
                weight="20 lbs"
                breed="Chihuahua"
                sex="Male"
                name="Pico"
                size="Small"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FadDash;

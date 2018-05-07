import React, { Component } from "react";
import LgnSgnUpBtn from "../../components/LgnSgnUpBtn";
import Logo from "../../components/Logo";
import SplashHeader from "../../components/SplashHeader";

class Splash extends Component {
  render() {
    return <div className="container">
        <SplashHeader />
        <h2>Thank you for visiting The Pico Project!</h2>
        <h3>
          “Saving one dog will not change the world, but surely for that one
          dog, the world will change forever.”
        </h3>
        <p>
          this app is a passion project from a few dog lovers that want to
          help keep dogs from getting lost in the adoption process!
        </p>
        <p>
          Pico Project was realized by a beautiful doggie named Tucker, who
          had fallen through the cracks. Tucker and his 82 animal brothers
          and sisters were rescued from an animal hoarding situation, and
          was given the renewed promise of a happy new forever home.
        </p>
        <p>
          <h4>The Problem:</h4> 
          With so many animals given the same promise, how does the community
          deal with such a large influx of dogs, all at the same time? There is rarely a single 
          adoption agency that can accommodate all of the animals at the same time, especially
          if they are sick or have special needs. Often times some dogs will fall through the cracks
          of proper tracking, and it can be difficult to make sure they are ending up in a situation
          that is both right for them, and their new fosters or adopters
        </p>
        <p>
          <h4>The Solution:</h4> 
          What this special situation needs is an open API and form for keeping track
          where the doggies are! This site has been specially made to not allow deletion of
          information, only updating as necessary. A dog, once created, will always have a home in
          the Pico Project! Here at the Pico Project, 
        </p>
        <br />
        <br />
        <br />
        <br />
        <LgnSgnUpBtn />
      </div>;
  }
}

export default Splash;

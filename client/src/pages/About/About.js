import React, { Component } from "react";
import LgnSgnUpBtn from "../../components/LgnSgnUpBtn";
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
          the Pico Project! Here at the Pico Project, a created dog can only be transferred or adopted, 
          so there will always be a record of their journey, even if only a small portion.
        </p>
        <p>
          <h3>Agencies/Rescuers</h3>        
          <h4>How You Can Use The Pico Project:</h4> 
          The process is simple! just let us know a few details about you upon signup, and you will be 
          transferred to the appropriate dashboard to get going! you will be able to update your user settings, 
          as well as move dogs that are in your possesion to various statuses based on their situation. You
          also have a "dog generator" that will let you create dogs on the fly, and come back later to update 
          their information as you learn more about them. Easy! 
        </p>
        <p>
          <h3>Fosterers/Adopters</h3>        
          <h4>How You Can Use The Pico Project:</h4> 
          Built into The Pico Project is a simple dashboard to help you get in touch with the agency that has
          a dog you may be interested in. While we want to do everything possible to help you get your pup, this
          site is all about the record! We will list the agency info out on each dog, and you can contact them directly.
          as the fostering program is often difficult and convoluted, we think its best that each agency handle 
          their processes separately. We're just here to make sure that a doggie always has a first known location upon
          rescue. Good luck finding and helping the doggo of your dreams!
        </p>
        <h5>Thank you again for using The Pico Project, and we wish you and every little critter nothing but happiness</h5>
        <br />
        <br />
        <br />
        <br />
        <LgnSgnUpBtn />
      </div>;
  }
}

export default Splash;

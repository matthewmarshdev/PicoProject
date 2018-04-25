import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
    );
  }
}

export default App;

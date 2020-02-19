import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import "react-day-picker/lib/style.css";
import "./App.css";
import { FlightsList } from "./components/flights-list";
import { Home } from "./components/home";

import history from "./history";

import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">Praveen Test</header>
        <div className="nav">
          <ul className="nav-menu">
            <li>
              {" "}
              <a href="/home">Home</a>
            </li>
            <li>
              {" "}
              <a href="/flightslist">Flights</a>
            </li>
          </ul>
          <br></br>
        </div>
        <div>
          <Router history={history}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route exact path="/flightslist" component={FlightsList} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;

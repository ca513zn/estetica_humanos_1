import React from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";

import Dashboard from "./components/Dashboard/Dashboard";
import Hairstyles from "./components/Hairstyles/Hairstyles";
import Reviews from "./components/Reviews/Reviews";
import Store from "./components/Store/Store";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>

      <NavBar />


      <Switch>
          <Route path="/dashboard">
          <Dashboard />
          </Route>
          <Route path="/hairstyles">
            <Hairstyles />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
        </Switch>

      </Router>
    </>
  );
};

export default App;

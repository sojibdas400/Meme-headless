import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Stats from "./components/Pages/Stats/Stats";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Pages/Home/Home";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/stats" exact component={() => <Stats />} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
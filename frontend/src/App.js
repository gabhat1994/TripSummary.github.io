import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/pagenotfound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#e5e4e2" }}>
      <Navbar />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

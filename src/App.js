import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import DarePage from "./pages/DarePage";

function App() {
  return (
    <Router>
    <div>
    <Nav />
    
    <Switch>
          <Route path="/dares">
          <DarePage />
          </Route>
          <Route path="/">
          <HomePage />
          </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App

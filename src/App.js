import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import DarePage from "./pages/DarePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header/Header";

function App() {  
  return (
    <Router>
    <div>
    <Header />
    <Nav />
    
    <Switch>
          <Route path="/dares/:id">
          <DarePage />
          </Route>
          <Route path="/login">
          <LoginPage />
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

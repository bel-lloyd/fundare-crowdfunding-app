import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import DarePage from "./pages/DarePage";
import AuthPage from "./pages/AuthPage";
import Header from "./components/Header/Header";
import SubmitDarePage from "./pages/SubmitDarePage";
import Footer from "./components/Footer/Footer";
import DonatePage from "./pages/DonatePage";

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
          <Route path="/authenticate">
            <AuthPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/submitdare">
            <SubmitDarePage />
          </Route>
          <Route path="/donate">
            <DonatePage />
          </Route>
    </Switch>

    <Footer />
    </div>
    </Router>
  );
}

export default App

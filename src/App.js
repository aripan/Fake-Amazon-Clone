import { Domain } from "@material-ui/icons";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // BEM convention for naming
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* LOGIN PAGE */}
          <Route path="/login">
            <Login />
          </Route>
          {/* CHECKOUT PAGE */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* HOME PAGE */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

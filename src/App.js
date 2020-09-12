import { Domain } from "@material-ui/icons";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // BEM convention for naming
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          {/* CHECKOUT PAGE */}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* HOME PAGE */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

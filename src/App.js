import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Register from "./components/Register";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HQ9z4LBLwppKTk33CV1lcCDgsd6VLmn3xw10gTDr9onxBJsJw89U4pMPbtLlL0KT6nst01NMHZXvhMOH5Pw9u9r00HlSAdvqZ"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        //! THIS IS HARD CODE, BUT NEED TO MAKE IT DYNAMIC
        // authUser.updateProfile({
        //   displayName: authUser.,
        // });
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM convention for naming
    <Router>
      <div className="app">
        <Switch>
          {/* REGISTER PAGE */}
          <Route path="/register">
            <Register />
          </Route>
          {/* LOGIN PAGE */}
          <Route path="/login">
            <Login />
          </Route>
          {/* CHECKOUT PAGE */}
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          {/* PAYMENT PAGE */}
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          {/* ORDERS PAGE */}
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          {/* HOME PAGE */}
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

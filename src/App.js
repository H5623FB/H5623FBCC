import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch, Redirect } from "react-router-dom";

import Toolbar from "./components/toolbar/toolbar";
import SideDrawer from "./components/sidedrawer/sideDrawer";
import Backdrop from "./components/backdrop/backdrop";

import Login from "./components/login";
import Logout from "./components/logout";
import ClosingForm from "./components/Pub/ClosingForm/ClosingForm";
import RequisitionForm from "./components/Pub/Requisitions/requisitions";
import PubDeliveriesForm from "./components/Pub/Deliveries/deliveries";
import WastageForm from "./components/Pub/Wastage/wastage";
import Home from "./components/home";

import fire from "./fbase";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    user: {}
  };
  componentDidMount() {
    this.authListener();
  }
  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        //localStorage.setItem('user', user.uid);  --> not nessesery
      } else {
        this.setState({ user: null });
        //localStorage.removeItem('user');
      }
    });
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    const { user } = this.state;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <ToastContainer />
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: "64px" }} className="container">
          <Switch>
            <Route
              path="/closing"
              render={props => {
                if (!user) return <Redirect to="/login" />;
                return <ClosingForm {...props} />;
              }}
            />
            <Route
              path="/requisitions"
              render={props => {
                if (!user) return <Redirect to="/login" />;
                return <RequisitionForm {...props} />;
              }}
            />
            <Route
              path="/deliveries_pub"
              render={props => {
                if (!user) return <Redirect to="/login" />;
                return <PubDeliveriesForm {...props} />;
              }}
            />
            <Route
              path="/wastage"
              render={props => {
                if (!user) return <Redirect to="/login" />;
                return <WastageForm {...props} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route
              path="/"
              render={props => {
                if (!user) return <Redirect to="/login" />;
                return <Home {...props} />;
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

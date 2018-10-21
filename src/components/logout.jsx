import React, { Component } from "react";
import fire from "../fbase";

class Logout extends Component {
  componentDidMount() {
    fire.auth().signOut();
    window.location = "/login";
  }
  render() {
    return null;
  }
}

export default Logout;

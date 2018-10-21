import React, { Component } from "react";
import fire from '../fbase';
import  './styles.css';
import { toast } from "react-toastify";
class Home extends Component {
  state = {};
  
  logout = () =>{
    try {
      fire.auth().signOut();
      toast('You logged out!');}    
    catch (error) {
      toast.error('Error')
    }  
}
  render() {
    return <div >
      <h1 className="home" >Welcome</h1>
      {/* <button className="btn btn-success btn" onClick={this.logout}>Logout</button> */}
      </div>;
  }
}

export default Home;
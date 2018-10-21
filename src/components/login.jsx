import React, { Component } from "react";
import fire from "../fbase";
import { toast } from "react-toastify";

class Login extends Component {
  initialState = { email: "", password: "" };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        toast.success("Succesfull login!");
        //this.props.history.push("/");
        this.handleFormReset();
        window.location = "/";
      })
      .catch(error => {
        console.log(error);
        toast.error("Invalid email/password combination!");
      });
    // if ((this.state.email = "pub@email.com")) {
    //   console.log("hello");
    //}
  };
  signUp = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log(error);
      });
  };
  handleFormReset = () => {
    this.setState(() => this.initialState);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <label htmlFor="uname">
          <b>Email</b>
        </label>
        <input
          className="form-control-lg"
          value={this.state.email}
          id="email"
          onChange={this.handleChange}
          type="text"
          placeholder="Enter Email"
          name="email"
          required
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          className="form-control-lg"
          value={this.state.password}
          id="pass"
          onChange={this.handleChange}
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />
        <button
          className="btn btn-success btn"
          onClick={this.login}
          type="submit"
        >
          Login
        </button>
        {/* <button onClick={this.signUp} type="submit">
          SignUp
        </button> */}
        {/* <button className="btn btn-success btn" onClick={this.logout} type="submit">Logout</button>  */}
      </div>
    );
  }
}

export default Login;

//Sign Up
// signUp = (e) =>{
//     e.preventDefault();
//     fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
//     .catch((error) => {
//         console.log(error);
//     })
// }
// <button onClick={this.signUp} type="submit">SignUp</button>
// logout = ()=>{
//     try {
//         fire.auth().signOut();
//         toast('You logged out!');
//     } catch (error) {
//         toast.error('Error')
//     }
// }

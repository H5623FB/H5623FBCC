import React, { Component } from "react";
import { toast } from "react-toastify";
import fire from "../../../../fbase";

import { Items, PAR, Requisitions, UpdateRequisitions } from "./softDrinkParts";
import Submit from "../submit";
import "../../../styles.css";

class SoftReq extends Component {
  state = {
    items: [],
    par: [],
    requisitions: [],
    rid: [],
    value: ""
  };
  componentWillMount() {
    let itemRef = fire.database().ref("ILEC/Pub/ClosingForm/SoftDrinks/Items");
    itemRef.on("value", snapshot => {
      let items = { id: snapshot.key, text: snapshot.val() };
      let itemnames = items.text;
      this.setState({ items: itemnames });
    });
    let requisitionsRef = fire
      .database()
      .ref("ILEC/Pub/ClosingForm/SoftDrinks/Requisitions");
    requisitionsRef.on("value", snapshot => {
      let requisitions = { id: snapshot.key, text: snapshot.val() };
      let requisitioningqty = requisitions.text;
      this.setState({ requisitions: requisitioningqty });
    });

    let ridRef = fire.database().ref("ILEC/Pub/ClosingForm/SoftDrinks/rid");
    ridRef.on("value", snapshot => {
      let rid = { id: snapshot.key, text: snapshot.val() };
      let ridqty = rid.text;
      this.setState({ rid: ridqty });
    });
    // let deliveredRef = fire
    //   .database()
    //   .ref("ILEC/Pub/ClosingForm/SoftDrinks/Delivered");
    // deliveredRef.on("value", snapshot => {
    //   let delivered = { id: snapshot.key, text: snapshot.val() };
    //   let deliveredqty = delivered.text;
    //   this.setState({ delivered: deliveredqty });
    // });
    let differenceRef = fire
      .database()
      .ref("ILEC/Pub/ClosingForm/SoftDrinks/Difference");
    differenceRef.on("value", snapshot => {
      let difference = { id: snapshot.key, text: snapshot.val() };
      let differenceqty = difference.text;
      this.setState({ difference: differenceqty });
    });
    let parRef = fire.database().ref("ILEC/Pub/ClosingForm/SoftDrinks/PAR");
    parRef.on("value", snapshot => {
      let par = { id: snapshot.key, text: snapshot.val() };
      let parqty = par.text;
      this.setState({ par: parqty });
    });
  }
  handleChange = e => {
    const value = { ...this.state.value };
    value[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ value });
  };
  submitChange = e => {
    e.preventDefault();
    let values = this.state.value;
    let valueArr = Object.keys(values).map(i => values[i]);
    let value = valueArr.map(function(item) {
      return parseInt(item, 10);
    });
    let str = [];
    let ridLen = this.state.rid.length;
    const errors = {};

    for (let key in value) {
      str.push(value[key]);
    }
    let strLen = str.length;
    function IsNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
    if (strLen === 0) {
      errors.message = "Each field has to be filled!";
      return toast.error(errors.message);
    }

    for (let key in value) {
      str += value[key];

      if (IsNumeric(value[key]) === false) {
        errors.message = "Only numbers accepted! Each field have to be filled";
        return toast.error(errors.message);
      }
      if (strLen !== ridLen) {
        errors.message = "Each field have to be filled!";
        return toast.error(errors.message);
      }
    }
    fire
      .database()
      .ref("ILEC/Pub/ClosingForm/SoftDrinks/Requisitions")
      .set(value);
    this.cancelCourse();
  };
  cancelCourse = () => {
    document.getElementById("req").reset();
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <Items items={this.state.items} />
          <PAR par={this.state.par} />
          <Requisitions requisitions={this.state.requisitions} />
          {/* <Delivered delivered={this.state.delivered} /> */}
          <UpdateRequisitions rid={this.state.rid} change={this.handleChange} />
          <Submit submit={this.submitChange} />
        </div>
      </React.Fragment>
    );
  }
}
export default SoftReq;

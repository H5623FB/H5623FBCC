import React, { Component } from "react";
import { toast } from "react-toastify";
import fire from "../../../../fbase";

import {
  Items,
  PAR,
  Requisitions,
  UpdateRequisitions,
  Delivered
} from "./BottleWaterParts";
import Submit from "../submit";
import AcceptAllButton from "../acceptAllButton";
import "../../../styles.css";

class BottleWaterDel extends Component {
  state = {
    items: [],
    par: [],
    requisitions: [],
    rid: [],
    delivered: [],
    value: ""
  };
  componentWillMount() {
    let itemRef = fire.database().ref("ILEC/Pub/ClosingForm/BottleWater/Items");
    itemRef.on("value", snapshot => {
      let items = { id: snapshot.key, text: snapshot.val() };
      let itemnames = items.text;
      this.setState({ items: itemnames });
    });
    let requisitionsRef = fire
      .database()
      .ref("ILEC/Pub/ClosingForm/BottleWater/Requisitions");
    requisitionsRef.on("value", snapshot => {
      let requisitions = { id: snapshot.key, text: snapshot.val() };
      let requisitioningqty = requisitions.text;
      this.setState({ requisitions: requisitioningqty });
    });

    let ridRef = fire.database().ref("ILEC/Pub/ClosingForm/BottleWater/rid");
    ridRef.on("value", snapshot => {
      let rid = { id: snapshot.key, text: snapshot.val() };
      let ridqty = rid.text;
      this.setState({ rid: ridqty });
    });
    let deliveredRef = fire
      .database()
      .ref("ILEC/Pub/ClosingForm/BottleWater/Delivered");
    deliveredRef.on("value", snapshot => {
      let delivered = { id: snapshot.key, text: snapshot.val() };
      let deliveredqty = delivered.text;
      this.setState({ delivered: deliveredqty });
    });
    let differenceRef = fire
      .database()
      .ref("ILEC/Pub/ClosingForm/BottleWater/Difference");
    differenceRef.on("value", snapshot => {
      let difference = { id: snapshot.key, text: snapshot.val() };
      let differenceqty = difference.text;
      this.setState({ difference: differenceqty });
    });
    let parRef = fire.database().ref("ILEC/Pub/ClosingForm/BottleWater/PAR");
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
      .ref("ILEC/Pub/ClosingForm/BottleWater/Delivered")
      .set(value);
    this.cancelCourse();
  };
  cancelCourse = () => {
    document.getElementById("bwdel").reset();
  };
  acceptAllReq = () => {
    let req = { ...this.state.requisitions };
    //req.shift();
    //console.log(req);
    fire
      .database()
      .ref("ILEC/Pub/ClosingForm/BottleWater/Delivered")
      .set(req);
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <Items items={this.state.items} />
          <PAR par={this.state.par} />
          <Requisitions requisitions={this.state.requisitions} />
          <Delivered delivered={this.state.delivered} />
          <UpdateRequisitions rid={this.state.rid} change={this.handleChange} />
          <Submit submit={this.submitChange} />
        </div>
        <AcceptAllButton requisitions={this.acceptAllReq} />
      </React.Fragment>
    );
  }
}
export default BottleWaterDel;

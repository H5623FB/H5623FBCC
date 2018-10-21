import React, { Component } from "react";
import { toast } from "react-toastify";
import fire from "../../../../fbase";

import { Items, Wastage, UpdateWastage } from "./SparklingWineParts";
import Submit from "../submit";
import "../../../styles.css";

class SparklingWineWastage extends Component {
  state = {
    items: [],
    wastage: [],
    rid: [],
    value: ""
  };
  componentWillMount() {
    let itemRef = fire
      .database()
      .ref("ILEC/Pub/ClosingForm/Sparkling Wine/Items");
    itemRef.on("value", snapshot => {
      let items = { id: snapshot.key, text: snapshot.val() };
      let itemnames = items.text;
      this.setState({ items: itemnames });
    });
    let wastageRef = fire
      .database()
      .ref("ILEC/Pub/ClosingForm/Sparkling Wine/Wastage");
    wastageRef.on("value", snapshot => {
      let wastage = { id: snapshot.key, text: snapshot.val() };
      let wastageqty = wastage.text;
      this.setState({ wastage: wastageqty });
    });

    let ridRef = fire.database().ref("ILEC/Pub/ClosingForm/Sparkling Wine/rid");
    ridRef.on("value", snapshot => {
      let rid = { id: snapshot.key, text: snapshot.val() };
      let ridqty = rid.text;
      this.setState({ rid: ridqty });
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
      .ref("ILEC/Pub/ClosingForm/Sparkling Wine/Wastage")
      .set(value);
    this.cancelCourse();
  };
  cancelCourse = () => {
    document.getElementById("swwast").reset();
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <Items items={this.state.items} />
          <Wastage wastage={this.state.wastage} />
          <UpdateWastage rid={this.state.rid} change={this.handleChange} />
          <Submit submit={this.submitChange} />
        </div>
      </React.Fragment>
    );
  }
}
export default SparklingWineWastage;

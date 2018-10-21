import React, { Component } from "react";
import fire from "../../../fbase";
import { toast } from "react-toastify";
import "../../styles.css";

class PrintClosingForm extends Component {
  printTrue = () => {
    const printIsTrue = "true";
    fire
      .database()
      .ref("ILEC/Pub/Print/ClosingForm/Print")
      .set(printIsTrue);

    function printIsFalse(fire) {
      const printIsFalse = "false";
      fire
        .database()
        .ref("ILEC/Pub/Print/ClosingForm/Print")
        .set(printIsFalse);
    }
    setTimeout(printIsFalse, 1000, fire);
    toast.success("Printing in Process");
  };

  render() {
    return (
      <div>
        <button
          submitstyle="submit"
          className="btn btn-danger btn-sm"
          onClick={this.printTrue}
          print="print"
        >
          Print Closing Form
        </button>
      </div>
    );
  }
}
export default PrintClosingForm;

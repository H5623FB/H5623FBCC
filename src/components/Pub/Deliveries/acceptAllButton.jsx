import React from "react";
import "../../styles.css";

const AcceptAllButton = ({ requisitions }) => {
  return (
    <div>
      <button
        requisitions="requisitions"
        className="btn btn-danger btn-sm"
        onClick={requisitions}
      >
        Accept Everything
      </button>
    </div>
  );
};
export default AcceptAllButton;

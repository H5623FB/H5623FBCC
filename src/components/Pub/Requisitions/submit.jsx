import React from 'react';
import "../../styles.css";

const Submit = ({ submit }) => (
    <div>
    <button submitstyle="submit" className="btn btn-success btn-sm" onClick={submit}>
      Submit
    </button>
  </div>
);

export default Submit;
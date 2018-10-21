import React from "react";
import "../../../styles.css";

const Items = ({ items }) => (
  <div>
    <div wrapper="wrapper" style={{ marginTop: "20px" }} className="items">
      <p className="h_items">Items</p>
      {items.map((i, y) => (
        <p className="rowstyle" key={y}>
          {i}
        </p>
      ))}
    </div>
  </div>
);
const PAR = ({ par }) => (
  <div>
    <div style={{ marginTop: "20px" }} className="par">
      <p className="h_par">PAR</p>
      {/* <label className="header_p">PAR</label> */}
      {par.map((s, i) => (
        <p className="rowstyle" key={i}>
          {s}
        </p>
      ))}
    </div>
  </div>
);
const Requisitions = ({ requisitions }) => (
  <div>
    <div style={{ marginTop: "20px" }} className="opening">
      <p className="h_opening">Requi</p>
      {requisitions.map((o, i) => (
        <p className="rowstyle" key={i}>
          {o}
        </p>
      ))}
    </div>
  </div>
);

const UpdateRequisitions = ({ rid, change }) => (
  <div>
    <div style={{ marginTop: "20px" }}>
      <form className="inpute" id="req">
        <p className="h_inpute">Update</p>

        {rid.map(i => (
          <input
            onChange={change}
            size="7"
            // className="form-control-sm"
            type="text"
            placeholder="Request"
            key={i}
            id={i}
            name="req"
          />
        ))}
      </form>
    </div>
  </div>
);
const Delivered = ({ delivered }) => (
  <div>
    <div style={{ marginTop: "20px" }} className="delivered">
      <p className="h_delivered">Delivered</p>
      {/* <label className="header_p">Delivered</label> */}
      {delivered.map((s, i) => (
        <p className="rowstyle" key={i}>
          {s}
        </p>
      ))}
    </div>
  </div>
);

export { Items, PAR, Requisitions, UpdateRequisitions, Delivered };

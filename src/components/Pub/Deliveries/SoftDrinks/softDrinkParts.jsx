import React from "react";
import "../../../styles.css";

const Items = ({ items }) => (
  <div>
    <label className="h_items">Soft Drinks</label>
    {items.map((i, y) => (
      <p className="rowstyle" key={y}>
        {i}
      </p>
    ))}
  </div>
);
const PAR = ({ par }) => (
  <div>
    <label className="h_par">PAR</label>
    {par.map((s, i) => (
      <p className="rowstyle" key={i}>
        {s}
      </p>
    ))}
  </div>
);
const Requisitions = ({ requisitions }) => (
  <div>
    <label className="h_opening">Requi</label>
    {requisitions.map((o, i) => (
      <p className="rowstyle" key={i}>
        {o}
      </p>
    ))}
  </div>
);

const UpdateRequisitions = ({ rid, change }) => (
  <div>
    <form className="inpute" id="softdel">
      <label className="h_inpute">Update</label>
      {rid.map(i => (
        <input
          onChange={change}
          size="7"
          // className="form-control-sm"
          type="text"
          placeholder="Request"
          key={i}
          id={i}
          name="softdel"
        />
      ))}
    </form>
  </div>
);
const Delivered = ({ delivered }) => (
  <div>
    <label className="h_delivered">Delivered</label>
    {delivered.map((s, i) => (
      <p className="rowstyle" key={i}>
        {s}
      </p>
    ))}
  </div>
);

export { Items, PAR, Requisitions, UpdateRequisitions, Delivered };

import React from "react";
import "../../../styles.css";

const Items = ({ items }) => (
  <div>
    <label className="h_items">Liqueurs</label>
    {items.map((i, y) => (
      <p className="rowstyle" key={y}>
        {i}
      </p>
    ))}
  </div>
);
const Wastage = ({ wastage }) => (
  <div>
    <label className="h_wastage">Wastage</label>
    {wastage.map((s, i) => (
      <p className="rowstyle" key={i}>
        {s}
      </p>
    ))}
  </div>
);
const UpdateWastage = ({ rid, change }) => (
  <div>
    <form className="inpute" id="liwast">
      <label className="h_inpute">Update</label>
      {rid.map(i => (
        <input
          onChange={change}
          size="7"
          // className="form-control-sm"
          type="text"
          placeholder="Wastage"
          key={i}
          id={i}
          name="liwast"
        />
      ))}
    </form>
  </div>
);

export { Items, Wastage, UpdateWastage };

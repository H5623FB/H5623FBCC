import React from "react";
import "../../../styles.css";

const Items = ({ items }) => (
  <div>
    <label className="h_items">White Wine</label>
    {items.map((i, y) => (
      <p className="rowstyle" key={y}>
        {i}
      </p>
    ))}
  </div>
);
const Opening = ({ opening }) => (
  <div>
    <label className="h_opening">Open</label>
    {opening.map((o, i) => (
      <p className="rowstyle" key={i}>
        {o}
      </p>
    ))}
  </div>
);
const Sale = ({ sale }) => (
  <div>
    <label className="h_sale">Sale</label>
    {sale.map((s, i) => (
      <p sale="sale" className="rowstyle" key={i}>
        {s}
      </p>
    ))}
  </div>
);
const Closing = ({ closing }) => (
  <div>
    <label className="h_closing">Closing</label>
    {closing.map((s, i) => (
      <p closing="closing" className="rowstyle" key={i}>
        {s}
      </p>
    ))}
  </div>
);
const Comments = ({ comments }) => (
  <div>
    <div className="comments">
      {comments.map((s, i) => (
        <p className="rowstyle" key={i}>
          {s}
        </p>
      ))}
    </div>
  </div>
);
const Delivered = ({ delivered }) => (
  <div>
    <label className="h_delivered">Delivered</label>
    {delivered.map((s, i) => (
      <p delivered="delivered" className="rowstyle" key={i}>
        {s}
      </p>
    ))}
  </div>
);
const Difference = ({ difference }) => (
  <div>
    <label className="h_difference">Diff</label>
    {difference.map((s, i) => (
      <p difference="difference" className="rowstyle" key={i}>
        {s}
      </p>
    ))}
  </div>
);
const PAR = ({ par }) => (
  <div>
    <label className="h_par">PAR</label>
    {par.map((s, i) => (
      <p par="par" className="rowstyle" key={i}>
        {s}
      </p>
    ))}
  </div>
);
const Transfers = ({ transfers }) => (
  <div>
    <label className="h_transfers">Transfers</label>
    {transfers.map((s, i) => (
      <p transfers="transfers" className="rowstyle" key={i}>
        {s}
      </p>
    ))}
  </div>
);
const Wastage = ({ wastage }) => (
  <div>
    <label className="h_wastage">Wastage</label>
    {wastage.map((s, i) => (
      <p wastage="wastage" className="rowstyle" key={i}>
        {s}
      </p>
    ))}
  </div>
);
const UpdateClosing = ({ rid, change }) => (
  <div>
    <form className="inpute" id="wwine">
      <label className="h_inpute">Update</label>
      {rid.map(i => (
        <input
          onChange={change}
          size="7"
          // className="form-control-sm"
          type="text"
          placeholder="Closing"
          key={i}
          id={i}
          name="wwine"
        />
      ))}
    </form>
  </div>
);

export {
  Items,
  Opening,
  Sale,
  Closing,
  Comments,
  Delivered,
  Difference,
  PAR,
  Transfers,
  Wastage,
  UpdateClosing
};

import React from "react";
import "./table.css";
import pic from "./thumbnail copy.jpg";

function Profile({ data }) {
  return (
    <td className="td-profile">
      <img width={40} src={pic} alt="Profile pic" />
      {data[1].name}
    </td>
  );
}

function Segment({ data }) {
  return;
}

function Row({ data }) {
  return (
    <>
      <tbody className="tbody">
        {data.map((d) => (
          <tr key={d[1].name} className="tbody-row">
            <td>
              <input type="checkbox" />
            </td>
            <Profile data={d} />
            <td>{d[1].lastSeen}</td>
            <td>{d[1].orders}</td>
            <td>{d[1].totalSpend}</td>
            <td>{d[1].latestPurchase}</td>
            <td>{d[1].news}</td>
            <td className="btn">{d[1].segments}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
}
export default Row;

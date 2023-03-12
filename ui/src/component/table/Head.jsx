import React from "react";

function Head() {
  return (
    <thead className="thead">
      <tr className="thead-row">
        <td>
          <input type="checkbox" />
        </td>
        <td>Customer</td>
        <td>Last seen</td>
        <td>Orders</td>
        <td>Total spent</td>
        <td>Latest Purchase</td>
        <td>News</td>
        <td>Segments</td>
      </tr>
    </thead>
  );
}

export default Head;

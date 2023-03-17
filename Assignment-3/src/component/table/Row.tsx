import "./table.css";
import pic from "./thumbnail copy.jpg";
import { Customers } from "./Table";

function Profile({ data }: { data: Customers }) {
  return (
    <td className="td-profile">
      <img width={40} src={pic} alt="Profile pic" />
      {data.name}
    </td>
  );
}

function RowData({ d }: { d: Customers }) {
  return (
    <tr key={d.name} className="tbody-row">
      <td>
        <input type="checkbox" />
      </td>
      <Profile data={d} />
      <td>{d.lastSeen}</td>
      <td>{d.orders}</td>
      <td>{d.totalSpend}</td>
      <td>{d.latestPurchase}</td>
      <td>{d.news}</td>
      <td className="btn">{d.segments}</td>
    </tr>
  );
}

function Row({ data, toggle }: { data: Customers[]; toggle: boolean }) {
  return (
    <>
      <tbody className="tbody">
        {toggle
          ? data
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((d) => <RowData d={d} />)
          : data
              .sort((a, b) => -1 * a.name.localeCompare(b.name))
              .map((d) => <RowData d={d} />)}
      </tbody>
    </>
  );
}
export default Row;

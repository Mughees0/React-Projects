import { BsArrowDownUp } from "react-icons/bs";

type HeadProps = {
  handleToggle: () => void;
};

function Head({ handleToggle }: HeadProps) {
  return (
    <thead className="thead">
      <tr className="thead-row">
        <td>
          <input type="checkbox" />
        </td>
        <td>
          Customer
          <i className="sort" onClick={() => handleToggle()}>
            <BsArrowDownUp />
          </i>
        </td>
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

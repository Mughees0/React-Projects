import React, { useState } from "react";
import "./table.css";
import Row from "./Row";
import Head from "./Head";

export type Customers = {
  name: string;
  lastSeen: string;
  orders: string;
  totalSpend: string;
  latestPurchase: string;
  news: string;
  segments: string;
};

type TableProps = {
  data: Customers[];
  filterText: string;
};

function Table({ data, filterText }: TableProps) {
  const filterData = data.filter((d) => {
    return d.name.toLowerCase().includes(filterText.toLowerCase());
  });

  const [toggle, setToggle] = useState<boolean>(false);

  function handleToggle() {
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <>
      <table className="table">
        <Head handleToggle={handleToggle} />
        <Row data={filterData} toggle={toggle} />
      </table>
    </>
  );
}

export default Table;

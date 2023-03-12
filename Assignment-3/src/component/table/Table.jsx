import React from "react";
import "./table.css";
import Row from "./Row";
import Head from "./Head";

function Table({ data, filterText }) {
  const filterData = data.filter((d) => {
    return d[1].name.toLowerCase().includes(filterText.toLowerCase());
  });

  return (
    <>
      <table className="table">
        <Head />
        <Row data={filterData} />
      </table>
    </>
  );
}

export default Table;

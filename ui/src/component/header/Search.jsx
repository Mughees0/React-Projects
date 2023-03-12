import React from "react";

function Search({ value, onValChange }) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => onValChange(e.target.value)}
      />
    </>
  );
}

export default Search;

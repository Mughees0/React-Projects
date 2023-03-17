import React from "react";
import { HeaderProps } from "./Header";

function Search({ value, onValChange }: HeaderProps) {
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

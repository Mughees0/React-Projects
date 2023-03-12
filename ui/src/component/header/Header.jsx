import React from "react";
import "./header.css";
import Search from "./Search";
import Features from "./Features";

function Header({ value, onValChange }) {
  return (
    <header className="header">
      <Search value={value} onValChange={onValChange} />
      <Features />
    </header>
  );
}

export default Header;

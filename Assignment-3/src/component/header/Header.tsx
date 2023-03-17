import React from "react";
import "./header.css";
import Search from "./Search";
import Features from "./Features";

export type HeaderProps = {
  value: string;
  onValChange: React.Dispatch<React.SetStateAction<string>>;
};

function Header({ value, onValChange }: HeaderProps) {
  return (
    <header className="header">
      <Search value={value} onValChange={onValChange} />
      <Features />
    </header>
  );
}

export default Header;

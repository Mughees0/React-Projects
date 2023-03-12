import React from "react";
import { useRef } from "react";
import "./navbar.css";
import pic from "./Screenshot_2023-03-09_at_8.50.12_PM-removebg-preview.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("hid");
  };

  return (
    <header>
      <nav className="nav">
        <img width="90px" src={pic} alt="pic here" />
        <ul ref={navRef} className="hid nor">
          <li>
            <a href="#home" onClick={showNav}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={showNav}>
              Services
            </a>
          </li>
          <li>
            <a href="#blogs" onClick={showNav}>
              Blogs
            </a>
          </li>
          <li>
            <a href="#contact" onClick={showNav}>
              Contact
            </a>
          </li>
        </ul>
        <button className="nav-btn" onClick={showNav}>
          <GiHamburgerMenu />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

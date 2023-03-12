import React from "react";
import "./footer.css";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="ftr-container">
      <span className="ftr-span">&copy; Mughees 2023</span>
      <ul className="ftr-ul">
        <li>
          <AiFillLinkedin />
        </li>
        <li>
          <AiFillFacebook />
        </li>

        <li>
          <AiFillGithub />
        </li>
        <li>
          <AiFillInstagram />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./stack.css";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";
import { ImCss3 } from "react-icons/im";

const Stack = () => {
  return (
    <section className="st-container">
      <h2 className="st-h1">Tech Stack</h2>
      <ul className="st-ul">
        <li>
          <GrReactjs />
        </li>
        <li>
          <IoLogoJavascript />
        </li>
        <li>
          <IoLogoHtml5 />
        </li>
        <li>
          <ImCss3 />
        </li>
      </ul>
    </section>
  );
};

export default Stack;

import React from "react";
import { Fragment } from "react";
import "./main.css";
import pic from "./mac copy.jpg";

const Main = () => {
  return (
    <Fragment>
      <section className="sec" id="home">
        <div className="center">
          <div className="left-col">
            <h1>Coding </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="right-col">
            <img className="lap-pic" src={pic} alt="laptop pic" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Main;

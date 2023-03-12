import React from "react";
import "./card.css";

const card = ({ title, para }) => {
  return (
    <div className="ser-container">
      <h2 id="service-card" className="ser-h1">
        {title}
      </h2>
      <p className="ser-para">{para}</p>
      <button
        id="more-btn"
        aria-labelledby="service-card more-btn"
        className="ser-btn"
      >
        More
      </button>
    </div>
  );
};

export default card;

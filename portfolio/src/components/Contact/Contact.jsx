import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" class="con-section">
      <div class="con-form">
        <h2>Contact Form</h2>
        <form className="con-form" aria-labelledby="form">
          <label for="name">Name: </label>
          <input aria-label="Write your fullname" id="name" type="text" />

          <label for="email">Email: </label>
          <input aria-label="Write your Email" id="email" type="email" />

          <label for="msg">Message: </label>
          <textarea
            aria-label="Write your Message"
            id="msg"
            cols="30"
            rows="10"
          ></textarea>
          <button
            className="con-btn"
            id="form-submit"
            aria-labelledby="form form-submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

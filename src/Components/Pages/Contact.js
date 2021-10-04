import React from "react";
import { Container } from "react-bootstrap";
import "./Pages.css";

const Contact = () => {
  return (
    <div>
      <Container>
        <div className="PageHeader">Contact</div>
        <div className="about-area">
          <div className="about-text">
            <h1>Contact Us</h1>
            <p></p>
          </div>
          <div className="about-img">
            <img src="contact.jpg" ></img>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;

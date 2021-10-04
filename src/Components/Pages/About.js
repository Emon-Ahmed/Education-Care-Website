import React from "react";
import { Container } from "react-bootstrap";
import "./Pages.css";

const About = () => {
  return (
    <div>
      <Container>
        <div className="PageHeader">About</div>

        <div className="about-area">
          <div className="about-text">
            <h1>About Us</h1>
            <p></p>
          </div>
          <div className="about-img">
            <img src="about.jpg" ></img>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;

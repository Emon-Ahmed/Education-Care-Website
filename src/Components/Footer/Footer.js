import "./Footer.css";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitterSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  // FontAwesome Icon Declare
  const BookReader = <FontAwesomeIcon icon={faBookReader} />;
  const Facebook = <FontAwesomeIcon icon={faFacebook} />;
  const Instagram = <FontAwesomeIcon icon={faInstagram} />;
  const Twitter = <FontAwesomeIcon icon={faTwitterSquare} />;
  const Linkedin = <FontAwesomeIcon icon={faLinkedin} />;

  return (
    <div>
      <Container>
        <div className="footer">
          <div className="inner-footer">
            <div className="footer-starter">
              <Navbar.Brand as={Link} to={"/body"} className="footerlogo">
                {BookReader} Edu Care
              </Navbar.Brand>
              <p>
                Get learning boost with thousand of worksheets, Games & etc.
              </p>
              <div className="icons">
                <div className="icon">{Facebook}</div>
                <div className="icon">{Instagram}</div>
                <div className="icon">{Twitter}</div>
                <div className="icon">{Linkedin}</div>
              </div>
            </div>

            <div className="footer-text">
              <h5>About</h5>
              <p>
                Education refers to the discipline that is concerned with
                methods of teaching and learning in schools or school-like
                environments.
              </p>
            </div>

            <div className="footer-text">
              <h5>Contact</h5>
              <p>
                Pathan Tola, Dhamrai
                <br /> Dhaka - 1350, Bangladesh
                <span>+880 1921412932</span>
                <span>technicalboyemon@gmail.com</span>
              </p>
            </div>

            <div className="footer-text">
              <h5>Map</h5>
              <img src="map.svg" alt="MAP" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
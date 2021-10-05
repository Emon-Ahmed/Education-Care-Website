import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitterSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <Container>

        <div className="footer">
          <div className="inner-footer">
            <div className="f">
              <Navbar.Brand as={Link} to={"/body"} className="footerlogo">
                <FontAwesomeIcon icon={faBookReader} /> Edu Care
              </Navbar.Brand>
              <p>Get learning boost with thousand of worksheets, Games & etc.</p>
              <div className="icons">
                <div className="icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
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
                Pathan Tola, Dhamrai<br /> Dhaka - 1350, Bangladesh 
                <span>+880 1921412932</span> <span>technicalboyemon@gmail.com</span>

              </p>
            </div>
            <div className="footer-text">
              <h5>Map</h5>
              <img src="map.svg" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

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
          <div>
            <hr />
            <div className="inner-footer">
              <Navbar.Brand as={Link} to={"/body"} className="footerlogo">
                <FontAwesomeIcon icon={faBookReader} /> Edu Care
              </Navbar.Brand>
              <div className="icons">
                <div className="icon">
                  <FontAwesomeIcon size="lg" icon={faFacebook} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon size="lg" icon={faInstagram} />
                </div>

                <div className="icon">
                  <FontAwesomeIcon size="lg" icon={faTwitterSquare} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon size="lg" icon={faLinkedin} />
                </div>
              </div>
              <div className="footer-text">© All Copyright Reserved</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

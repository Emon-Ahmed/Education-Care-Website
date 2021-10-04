import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div>
      <Container>
        <div className="footer">
          <hr />
          <div>
            <Navbar.Brand as={Link} to={"/body"} className="logo">
              <FontAwesomeIcon icon={faBookReader} /> Edu Care
            </Navbar.Brand>
            <div className="text-right">© All Copyright Reserved</div>
          </div>
        </div>
      </Container>
    </div>
  );
}

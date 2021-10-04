import "./Header.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div>
      <Navbar expand="lg" className="nav-bar">
        <Container>
          <Navbar.Brand as={Link} to={"/body"} className="logo">
            <FontAwesomeIcon icon={faBookReader} /> Edu Care
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/body"} className="nav-text">Home</Nav.Link>
              <Nav.Link as={Link} to={"/courses"} className="nav-text">Courses</Nav.Link>
              <Nav.Link as={Link} to={"/about"} className="nav-text">About</Nav.Link>
              <Nav.Link as={Link} to={"/contact"} className="nav-text">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
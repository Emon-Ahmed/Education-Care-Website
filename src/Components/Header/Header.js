import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="/home">Edu Care</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to={"/body"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

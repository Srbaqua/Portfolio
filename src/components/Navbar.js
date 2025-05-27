import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
const Navbarmain = () => {
  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">PortFolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav"/>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarmain;

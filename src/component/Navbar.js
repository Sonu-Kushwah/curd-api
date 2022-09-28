import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
function Navbar1() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto navbar-nav">
            <Link to="/">Home</Link>
            <Link to="/RestorentList">List</Link>
            <Link to="/RestorentCreate">Create</Link>
            <Link to="/Insert">Insert</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;

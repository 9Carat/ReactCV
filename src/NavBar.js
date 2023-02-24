import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export const NavbarMain = (props) => {
    return (
        <Navbar display="flex"  bg="dark" variant="dark" expand="sm" className="pb-3">
        <Container>
          <Navbar.Brand>CV Christoffer Ottestig</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/Experiences">Experiences</Nav.Link>
              <Nav.Link as={NavLink} to="/Education">Education</Nav.Link>
              <Nav.Link as={NavLink} to="/Portfolio">Portfolio</Nav.Link>
              <Nav.Link as={NavLink} to="/Contact">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
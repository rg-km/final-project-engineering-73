import React, { Component } from 'react'
import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
            <Container>
             <Navbar.Brand href="#home">GURUKU</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Login</Nav.Link>
                    <NavDropdown title="Register" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Sebagai Siswa</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Sebagai Pengajar</NavDropdown.Item>
                    </NavDropdown>
          </Nav>
             </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
    )
  }
}

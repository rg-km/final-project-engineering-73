import React, { Component } from 'react'
import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import {BrowserRouter ,Link } from "react-router-dom";
import logo from './guruku.png';

export default class NavbarComp extends Component {
  render() {
    return (
        <div>
          <Navbar bg="light text-dark p-3" expand="lg">
              <Container>
              <Navbar.Brand href="/" className='text-white'><img src={logo} alt="" width="100" height="50"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                <Nav>
                 <Link to="/" className="nav-link ">Home</Link>
                 <Link to="/about" className="nav-link  ">About</Link>
                 <Link to="/contact" className="nav-link">Contact</Link>
               
                 <NavDropdown title="Login" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/login-siswa">Login Siswa</NavDropdown.Item>
                  <NavDropdown.Item href="/login-pengajar">Login Pengajar</NavDropdown.Item>
                 </NavDropdown> 
                 <Link to="" className="nav-link ">|</Link>
                
                 <NavDropdown title="Register" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/register">Sebagai Siswa</NavDropdown.Item>
                  <NavDropdown.Item href="/register-pengajar">Sebagai Pengajar</NavDropdown.Item>
                 </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
    )
  }
}

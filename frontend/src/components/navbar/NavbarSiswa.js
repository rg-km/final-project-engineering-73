import React, { Component } from 'react'
import {Navbar, Container, Nav, Form, Button,Col } from 'react-bootstrap'
import {Link } from "react-router-dom";
import logo from './guruku.png';

export default class NavbarSiswa extends Component {
  render() {
    return (
      <div>
          <Navbar bg="light text-dark p-3" expand="lg">
              <Container>
              <Navbar.Brand href="/" className='text-white'><img src={logo} alt="" width="100" height="50"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">

              <Col xs={5}>
                <Form.Control 
                placeholder="Search here"
                className="d-flex"
                />
              </Col>

            <Button variant="outline-success">Search</Button>
         
         
                  <Nav className="me-auto">
                  </Nav>
            
                <Nav>
                 <Link to="/" className="nav-link ">Kegiatanku</Link>
                 <Link to="/" className="nav-link  ">Cari Guru</Link>
                 <Link to="" className="nav-link  ms-5">Username</Link> 
                
                </Nav>
              </Navbar.Collapse>
              </Container>
          </Navbar>
      </div>
    )
  }
}

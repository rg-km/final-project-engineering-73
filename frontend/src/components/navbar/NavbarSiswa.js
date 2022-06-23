import React, { Component } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
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
                  <Nav className="me-auto">
                  < input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </Nav>
                <Nav>
                 <Link to="/kegiatanku" className="nav-link  ">Kegiatanku</Link>
                 <Link to="/cari" className="nav-link ">Cari Guru</Link>
                 <Link to="/username" className="nav-link  ms-5">Username</Link> 
                </Nav>
              </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
    )
  }
}

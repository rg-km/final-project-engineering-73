import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import {BrowserRouter ,Link } from "react-router-dom";
import logo from '../navbar/guruku.png';
const CariGuru = ()=>{
  return(
    <>
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

        <div className="content container mt-5 mb-5">
          <h1>GURU</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default CariGuru;
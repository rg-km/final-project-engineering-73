import React, { Component } from 'react'
import  './profile-siswaedit.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import {BrowserRouter ,Link } from "react-router-dom";
import logo from '../navbar/guruku.png';

function Profilesiswaedit() {
    return (
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
        
        <form>
            <div class="row mb-3">
                <label for="inputNama" class="col-sm-2 col-form-label">Nama</label>
                <div class="col-sm-10">
                    <input type="nama" class="form-control" id="inputNama"/>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputUsia" class="col-sm-2 col-form-label">Usia</label>
                <div class="col-sm-10">
                    <input type="usia" class="form-control" id="inputUsia"/>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputSekolah" class="col-sm-2 col-form-label">Sekolah</label>
                <div class="col-sm-10">
                    <input type="sekolah" class="form-control" id="inputSekolah"/>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputKelas" class="col-sm-2 col-form-label">Kelas</label>
                <div class="col-sm-10">
                    <input type="kelas" class="form-control" id="inputKelas"/>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputHobby" class="col-sm-2 col-form-label">Hobby</label>
                <div class="col-sm-10">
                    <input type="hobby" class="form-control" id="inputHobby"/>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputAlamat" class="col-sm-2 col-form-label">Alamat</label>
                <div class="col-sm-10">
                    <input type="alamat" class="form-control" id="inputAlamat"/>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail"/>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Simpan</button>
        </form>
        </>
        );
}
export default Profilesiswaedit;
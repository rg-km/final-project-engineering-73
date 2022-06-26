import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import {BrowserRouter ,Link } from "react-router-dom";
import logo from '../navbar/guruku.png';
import NavbarSiswa from '../navbar/NavbarSiswa';
import img from '../profile-pengajar/team-male.jpeg'
const CariGuru = ()=>{
  return(
    <>
    <NavbarSiswa/>
        <div className="content container mt-5 mb-5">
          <h1>GURU</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
                <img src={img} class="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Nama Pengajar</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Profile</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
              <img src={img} class="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Nama Pengajar</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Profile</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
              <img src={img} class="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Nama Pengajar</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Profile</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
              <img src={img} class="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Nama Pengajar</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Profile</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
              <img src={img} class="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Nama Pengajar</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Profile</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
              <img src={img} class="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Nama Pengajar</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Profile</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
              <img src={img} class="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Nama Pengajar</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Profile</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
              <img src={img} class="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Nama Pengajar</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Profile</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mt-5 mb-5" >
              <img src={img} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Nama Pengajar</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#"className="btn btn-primary">Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default CariGuru;
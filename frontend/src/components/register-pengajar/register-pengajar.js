import React, { Component } from 'react'
import  './register-pengajar.css';
import guruku from './guruku-bg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../../components/navbar/NavbarComp';
import { Link } from "react-router-dom";
function Registerpengajar() {
  return (
    <>
     <NavbarComp/>
     <div className="row justify-content-center align-items-center">
    <div className="col-sm-3">
      <img src={guruku} alt="" height={400} />
    </div>
    <div className="col-sm-4">
    <form>
        <h3 className='mb-4'>Register Pengajar GURUKU</h3>
        <div className="mb-3">
          <input
            type="username"
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          {/* <button type="submit" className="btn btn-primary">
            Submit
          </button> */}
           <Link to="/pengajuan"  className="btn btn-info btn-lg px-4 me-sm-3 text-white">Submit</Link> 
        </div>
        <p className="sudah-punya text-right">
            <a href="/login">Sudah punya akun?</a>
        </p>
      </form>
    </div>
  </div>
    </>
  
      
     
  );
}

export default Registerpengajar;
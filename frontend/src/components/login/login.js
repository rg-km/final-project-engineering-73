import React, { Component } from 'react'
import  './login.css';
import guruku from './guruku-bg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../../components/navbar/NavbarComp';

function Login() {
  
  return (
    <>
    <NavbarComp/>
     <div className="row justify-content-center align-items-center">
    <div className="col-sm-3">
      <img src={guruku} alt="" height={400} />
    </div>
    <div className="col-sm-4">
    <form>
        <h3 className='mb-4'>Sign In GURUKU</h3>
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
        <div className="mb-3">
        <select className="form-select" aria-label="Default select example" name="status">
          <option value="siswa">Siswa</option>
          <option value="pengajar">Pengajar</option>
        </select>
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox ">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label " htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  </div>
    </>
 
  );
}

export default Login;
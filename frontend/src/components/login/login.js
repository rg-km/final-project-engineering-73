import React, { Component } from 'react'
import  './login.css';
import guruku from './guruku-bg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../../components/navbar/NavbarComp';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'siswa'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if(event = 'siswa'){
      alert('Km Adalah ' + this.state.value);
    }else{
      alert('Km Adalah ' + this.state.value);
    }
   
  }
  render(){
    return (
      <>
      <NavbarComp/>
       <div className="row justify-content-center align-items-center">
      <div className="col-sm-3">
        <img src={guruku} alt="" height={400} />
      </div>
      <div className="col-sm-4">
      <form onSubmit={this.handleSubmit}>
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
          <select className="form-select" aria-label="Default select example" value={this.state.value} onChange={this.handleChange} >
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
            <button type="submit" className="btn btn-primary" value="Submit" >
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
}

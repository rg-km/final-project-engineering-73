import React, { Component } from 'react'
import  './register.css';
import guruku from './guruku-bg.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  const [username, setUsername] = useState(''); // initial state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } if (name === 'email') {
      setEmail(value);
    } if (name === 'password') {
      setPassword(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password);
  }

  return (
  <div className="row justify-content-center align-items-center">
    <div className="col-sm-3">
      <img src={guruku} alt="" height={400} />
    </div>
    <div className="col-sm-4">
    <form>
        <h3 className='mb-4'>Register Siswa GURUKU</h3>
        <div className="mb-3">
          <input
            type="username"
            className="form-control"
            value={username}
            onChange={handleChange}
            placeholder="Enter username"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" onClick={()=>handleSubmit()}  className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="sudah-punya text-right">
            <a href="/login">Sudah punya akun?</a>
        </p>
      </form>
    </div>
  </div>
      
     
  );
}

export default Register;
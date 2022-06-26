import React, { Component ,useState} from 'react'
import  './login.css';
import guruku from './guruku-bg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../../components/navbar/NavbarComp';
import { useNavigate } from "react-router-dom";


function Login() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  let navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    let result = await fetch('http://127.0.0.1:8080/api/login/guru',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username:username,
        password:password
      })
    });
    result = await result.json();
    console.warn(result);
    console.log(username)
    navigate("/profile-pengajar");
    
    // if(result.status === 200){
    //   localStorage.setItem('user-info',JSON.stringify(result));
    //   navigate("/profile-pengajar");
    }

  return (
    <>
    <NavbarComp/>
     <div className="row justify-content-center align-items-center">
    <div className="col-sm-3">
      <img src={guruku} alt="" height={400} />
    </div>
    <div className="col-sm-4">
    <form>
        <h3 className='mb-4'>Login</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        
        <div className="d-grid">
          <button  className="btn btn-primary" onClick={handleSubmit}>
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
import React, { Component ,useState} from 'react'
import  './register-pengajar.css';
import guruku from './guruku-bg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../../components/navbar/NavbarComp';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Registerpengajar() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  let navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    let result = await fetch('http://127.0.0.1:8080/api/register/guru',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username:username,
        email:email,
        password:password
      })
    });
    result = await result.json();
    console.warn(result);
    navigate("/profile-guru");
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
        <h3 className='mb-4'>Register Guru</h3>
        <div className="mb-3">
          <input
            type="username"
            className="form-control"
            placeholder="Enter username"
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
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
          {/* <button type="submit" className="btn btn-primary">
            Submit
          </button> */}
           <Link to="/pengajuan"  className="btn btn-info btn-lg px-4 me-sm-3 text-white" onClick={handleSubmit}>Submit</Link> 
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
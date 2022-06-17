import Carousels from "./carousels/carousels";
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './img/main-bg.jpg';
import dicoding from './img/dicoding.png';
import udemy from './img/udemy.png';
import google from './img/google-dev.png';
import fiver from './img/fiver.png';
import { Card,Button } from 'react-bootstrap';
import '../index.css'
import { Link, Route, useLocation } from "react-router-dom";
import About from "./about/about";
function Home(){
  return(
    <div>
      <Carousels/>
      <div>
       <div className="px-4 pt-5 my-5 text-center border-bottom hero">
        <h1 className="display-4 fw-bold">Selamat Datang Di GURUKU</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Guruku adalah platform pembelajaran untuk segala jenjang pendidikan disini kamu dapat menemukan guru yang terpercaya kredibilitasnya.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" className="btn btn-info btn-lg px-4 me-sm-3 text-white">Baca Selengkapnya </button>
          </div>
        </div>
      </div>

      {/* Patner */}
      <div className="patner d-flex container h-auto p-3 mt-5 align-items-center justify-content-center">
        <div className="row">
          <div className="col-md-3 p-2">
            <img src={udemy} alt="" width={120} />
          </div>
          <div className="col-md-3 p-2">
          <img src={fiver} alt="" width={120}/>
          </div>
          <div className="col-md-3 p-3">
          <img src={dicoding} alt="" width={150}/>
          </div>
          <div className="col-md-3 p-3 ">
          <img src={google} alt="" width={200} />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


export default Home;
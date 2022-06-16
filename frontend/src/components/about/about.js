import React, { Component } from 'react'
import  '../login/login.css';
import aboutt from './aboutt.png';
import 'bootstrap/dist/css/bootstrap.min.css';
function About() {
  return (
  <div className="row justify-content-center align-items">
    <div className="col-sm-3">
    <img src={aboutt} alt="" height={550} />
    </div>
    <div className="col-sm-4">
    <form>
        <h3 className='mb-4'>GURUKU</h3>
        <p className="text-justify">
        Guruku merupakan sebuah platform penghubung antara siswa dan guru,
        yang berfokus untuk menemukan pekerjaan dan,
        menemukan guru private yang tentunya ahli dalam bidangnya
        </p>
      </form>
    </div>
  </div>
  );
}

export default About;
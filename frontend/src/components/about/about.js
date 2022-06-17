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
          <p>
          Guruku merupakan sebuah platform penghubung antara siswa dan guru,
          yang berfokus untuk menemukan pekerjaan dan,
          menemukan guru private yang tentunya ahli dalam bidangnya
          </p>
      </form>
    </div>
    <div className="card navbar-light "  >
      <div className="card-body body-aboutt ">
        <div className="container">
          <div className="row ">
            <div className="col">
              <h5 className="card-title ">Team</h5>
              <p>
              Muhammad Shabri Rabbani<br/>
              Rika An Rokhim<br/>
              Ferdinal Riandy Saragih<br/>
              Muhammad Ilham Rasyid Ridha<br/>
              Febrian Andy Kusuma<br/>
              Kadek Dwi Natasya .P
              </p>
            </div>
            <div className="col">
              <h5 className="card-title ">Misi Kami</h5>
              <p>Menciptakan peluang ekonomi<br/> 
                sehingga orang memiliki kehidupan<br/>
                yang lebih baik, seta membantu<br/> 
                para siswa untuk menemukan<br/>
                guru yang ideal.
              </p>
            </div>
            <div className="col">
              <h5 className="card-title ">Guruku adalah workforce anda</h5>
              <p >Jika anda adalah klien independen yang datang ke sini gunakan
                  workforce ini untuk untuk mewujudkan potensi anda, 
                  dan ketahuilah anda adalah bagian yang berharga bagi kami 
                  serta berperan penting dalam perubahan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default About;
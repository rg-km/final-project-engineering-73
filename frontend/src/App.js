import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Register from './components/register/register';
import Registerpengajar from './components/register-pengajar/register-pengajar';
import NavbarComp from './components/navbar/NavbarComp';
import { BrowserRouter, Link, Route,Routes, Switch } from 'react-router-dom'
import Home from './components/Home';
import About from './components/about/about'
import Contact from './components/contact/contact';
import CariGuru from './components/cari-guru/CariGuru'
import Kegiatanku from './components/kegiatanku/kegiatanku';
import Profilesiswa from './components/profile-siswa/profile-siswa';
import Profilesiswaedit from './components/profile-siswaedit/profile-siswaedit';
import HlmBelajarSiswa from './components/hlm-belajar-siswa/hlm-belajar-siswa';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/register-pengajar" element={<Registerpengajar/>} />
        <Route path="/kegiatanku" element={<Kegiatanku/>} />
        <Route path="/cari-guru" element={<CariGuru/>} />
        <Route path="/profile-siswa" element={<Profilesiswa/>} />
        <Route path="/profile-siswaedit" element={<Profilesiswaedit/>} />
        <Route path="/hlm-belajar-siswa" element={<HlmBelajarSiswa/>}/>
      </Routes>
      <Footer/>
    </div>
   
  );
}

export default App;
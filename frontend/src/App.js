import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Register from './components/register/register';
import Registerpengajar from './components/register-pengajar/register-pengajar';
import { BrowserRouter, Link, Route,Routes, Switch } from 'react-router-dom'
import Home from './components/Home';
import About from './components/about/about'
import Contact from './components/contact/contact';
import CariGuru from './components/cari-guru/CariGuru'
import Profilesiswa from './components/profile-siswa/profile-siswa';
import Profilesiswaedit from './components/profile-siswaedit/profile-siswaedit';
import ProfilePengajar from './components/profile-pengajar/ProfilePengajar';
import ProfilePengajarEdit from './components/profile-pengajaredit/ProfilePengajarEdit';


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
        <Route path="/cari-guru" element={<CariGuru/>} />
        <Route path="/profile-siswa" element={<Profilesiswa/>} />
        <Route path="/profile-siswaedit" element={<Profilesiswaedit/>} />
        <Route path="/profile-pengajar" element={<ProfilePengajar/>} />
        <Route path="/profile-pengajaredit" element={<ProfilePengajarEdit/>} />
      </Routes>
      <Footer/>
    </div>
   
  );
}

export default App;
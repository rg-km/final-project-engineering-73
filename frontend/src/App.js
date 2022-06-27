import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer';
import LoginGuru from './components/login/login-guru';
import LoginSiswa from './components/login/login-siswa';
import Register from './components/register/register';
import Registerpengajar from './components/register-pengajar/register-pengajar';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/about/about'
import Contact from './components/contact/contact';
import CariGuru from './components/cari-guru/CariGuru'
import Kegiatanku from './components/kegiatanku/kegiatanku';
import ProfileSiswa from './components/profile-siswa/profile-siswa';
import ProfileSiswaedit from './components/profile-siswaedit/profile-siswaedit';
import HlmBelajarSiswa from './components/hlm-belajar-siswa/hlm-belajar-siswa';
import ProfilePengajar from './components/profile-pengajar/ProfilePengajar';
import Kelasku from './components/kelasku/kelasku';
import HlmBelajarPengajar from './components/hlm-belajar-pengajar/hlm-belajar-pengajar';
import Pengajuan from './components/pengajuan/pengajuan';
import ProfilePengajarEdit from './components/profile-pengajaredit/ProfilePengajarEdit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/login-siswa" element={<LoginSiswa/>} />
        <Route path="/login-pengajar" element={<LoginGuru/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/register-pengajar" element={<Registerpengajar/>} />
        <Route path="/kegiatanku" element={<Kegiatanku/>} />
        <Route path="/hlm-belajar-siswa/:username" element={<HlmBelajarSiswa/>}/>
        <Route path="/cari-guru" element={<CariGuru/>} />
        <Route path="/profile-siswa" element={<ProfileSiswa/>} />
        <Route path="/pengajuan" element={<Pengajuan/>} />
        <Route path="/profile-siswaedit" element={<ProfileSiswaedit/>} />
        <Route path="/kelasku" element={<Kelasku/>} />
        <Route path="/hlm-belajar-pengajar/:username" element={<HlmBelajarPengajar/>} />
        <Route path="/profile-pengajar" element={<ProfilePengajar/>} />
        <Route path="/profile-pengajaredit" element={<ProfilePengajarEdit/>} />
      </Routes>
      <Footer/>
    </div>
   
  );
}

export default App;
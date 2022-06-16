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

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Routes>
     
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/register-pengajar" element={<Registerpengajar/>} />
      </Routes>
      <Footer/>
    </div>
   
  );
}

export default App;
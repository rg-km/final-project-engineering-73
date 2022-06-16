import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login';
import Register from './components/register/register';

import Home from './components/Home';
import NavbarComp from './components/navbar/NavbarComp';
import { BrowserRouter, Link, Route,Routes, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavbarComp/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/register-pengajar" element={<Registerpengajar/>} />
  
      </Routes>

    </div>
  );
}

export default App;
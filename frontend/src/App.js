import React from 'react';
import './App.css';
import {Headerutama} from './components/navbar';
import Carousels from './components/carousels/carousels';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <div>
    <Headerutama />
    </div>
    <div className='App'>
    <Carousels />
    </div>
    <div>
    <Footer />
    </div>
    </>
  );
}

export default App;

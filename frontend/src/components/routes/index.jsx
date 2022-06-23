import { BrowserRouter, Link, Route,Routes, Switch } from 'react-router-dom'
import CariGuru from './components/cari-guru/CariGuru';

function Index() {
  return (
    <div className="App">
      <NavbarComp/>
      <Routes>

        <Route path="/cari-guru" element={<CariGuru/>} />
      </Routes>
      <Footer/>
    </div>
   
  );
}

export default App;
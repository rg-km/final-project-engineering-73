import { BrowserRouter, Link, Route,Routes, Switch } from 'react-router-dom'
import CariGuru from './components/cari-guru/CariGuru';
import NavbarComp from '../navbar/NavbarComp';
import Kegiatanku from '../kegiatanku/kegiatanku';
function Index() {
  return (
    <div className="App">
      <NavbarComp/>
      <Routes>
        <Route path="/kegiatanku" element={<Kegiatanku/>} />
        <Route path="/cari-guru" element={<CariGuru/>} />
      </Routes>
      <Footer/>
    </div>
   
  );
}
export default Index;
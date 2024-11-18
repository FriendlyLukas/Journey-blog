import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import OurTrips from './pages/OurTrips';
import AboutUs from './pages/AboutUs';
import Bangkog from './pages/Bangkog';
import ChangMai from './pages/ChangMai';
import ChangRai from './pages/ChangRai';
import KualaLumpur from './pages/KualaLumpur';
import Borneo from './pages/Borneo';
import KhaoSok from './pages/KhaoSok';
import Krabi from './pages/Krabi';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-trips" element={<OurTrips />} />
            <Route path="/our-trips/Bangkog" element={<Bangkog />} />
              <Route path="/our-trips/ChangMai" element={<ChangMai />} />
              <Route path="/our-trips/ChangRai" element={<ChangRai />} />
              <Route path="/our-trips/KualaLumpur" element={<KualaLumpur />} />
              <Route path="/our-trips/Borneo" element={<Borneo />} />
              <Route path="/our-trips/KhaoSok" element={<KhaoSok />} />
              <Route path="/our-trips/Krabi" element={<Krabi />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

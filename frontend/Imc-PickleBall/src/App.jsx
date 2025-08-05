import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <LocationSection />
      <Footer/>
    </div>
  );
}

export default App;

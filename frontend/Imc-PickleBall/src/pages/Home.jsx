import React from 'react';
import Navbar from '../components/Navbar';           
import HeroSection from '../components/HeroSection'; 
import LocationSection from '../components/LocationSection'; 
import Footer from '../components/Footer'; 
import CheckAvailabilityModal from '../components/CheckAvailabilityModal';    
import { useState } from 'react';

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col flex-1 pt-20">
      <HeroSection onOpenAvailability={() => setShowModal(true)} />
        <LocationSection />
      </main>
      <Footer />
      
      {showModal && (
  <CheckAvailabilityModal
    visible={showModal}
    onClose={() => setShowModal(false)}
  />
)}


    </div>
  );
};

export default HomePage;

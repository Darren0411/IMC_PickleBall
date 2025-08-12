import React, { useState, useEffect } from 'react';

const HeroSection = ({ onOpenAvailability }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  // Your actual court images
  const courtImages = [
    '/src/assets/IMG_1201.jpg',
    '/src/assets/IMG_1202.jpg', 
    '/src/assets/IMG_1203.jpg',
    '/src/assets/IMG_1204.jpg'
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === courtImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [courtImages.length]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const scrollToLocation = () => {
    document.querySelector('.location-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen pt-24 flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Hero Content */}
          <div className="flex flex-col justify-center space-y-8">
  <div className="space-y-6">
    <div className="inline-block">
      <span className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
        🏆 Professional Court
      </span>
    </div>
    
    <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
      Innocent Memorial Centre
      <span className="block text-slate-600 text-3xl lg:text-4xl mt-2">
        Pickleball Court
      </span>
    </h1>
    
    <p className="text-lg text-slate-600 flex items-center gap-2">
      📍 Chulna, Vasai West - Premium Indoor Facility
    </p>
    
    <div className="space-y-2 text-slate-600">
      <p className="flex items-center gap-2">
        ⏰ Operating Hours: 6:00 AM - 10:00 PM
      </p>
      <p className="flex items-center gap-2">
        🏆 Professional Court Standards
      </p>
      <p className="flex items-center gap-2">
        💡 Fully Air-Conditioned Indoor Court
      </p>
    </div>
  </div>
  
  <div className="flex gap-4 items-center">
  <button onClick={onOpenAvailability} className="bg-slate-800 hover:bg-slate-900 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2" >
🏓 Check Availability
</button>
  
  <a 
    href="https://www.google.com/maps/place/Innocent+Memorial+Centre/@19.3818412,72.8073678,16.45z/data=!4m6!3m5!1s0x3be7af002197a051:0xec5bb1d2129a77c9!8m2!3d19.3806402!4d72.8082841!16s%2Fg%2F11lnjm41y8?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white hover:bg-slate-50 text-slate-800 font-semibold text-lg px-8 py-4 rounded-full border-2 border-slate-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
  >
    📍 View Location
  </a>
</div>

</div>
          
          {/* Right side - Court Images */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-w-4 aspect-h-3 h-96 lg:h-[500px]">
                <img 
                  src={courtImages[currentImageIndex]} 
                  alt={`IMC Pickleball Court ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              
              {/* Image Navigation Arrows */}
              <button 
                onClick={() => goToSlide(currentImageIndex === 0 ? courtImages.length - 1 : currentImageIndex - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-800 text-white p-2 rounded-full transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => goToSlide(currentImageIndex === courtImages.length - 1 ? 0 : currentImageIndex + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-800 text-white p-2 rounded-full transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Court Features Badge */}
              <div className="absolute top-4 left-4 bg-slate-800/90 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Live Court
              </div>
            </div>
            
            {/* Image Indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {courtImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-slate-800 scale-125' 
                      : 'bg-slate-400 hover:bg-slate-600'
                  }`}
                />
              ))}
            </div>
            
            {/* Court Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-200">
                <div className="text-2xl font-bold text-slate-800">1</div>
                <div className="text-sm text-slate-600">Premium Court</div>
              </div>
              <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-200">
                <div className="text-2xl font-bold text-slate-800">16hrs</div>
                <div className="text-sm text-slate-600">Daily Open</div>
              </div>
              <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-200">
                <div className="text-2xl font-bold text-slate-800">A/C</div>
                <div className="text-sm text-slate-600">Indoor Court</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="flex justify-center mt-16">
          <button 
            onClick={scrollToLocation}
            className="text-center animate-bounce cursor-pointer group"
          >
            <div className="text-4xl text-slate-700 mb-2 group-hover:text-slate-900 transition-colors">
              ↓
            </div>
            <p className="text-slate-600 text-sm group-hover:text-slate-800 transition-colors">
              Scroll to see location
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

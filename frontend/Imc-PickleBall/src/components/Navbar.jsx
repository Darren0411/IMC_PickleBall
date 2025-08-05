import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleHover = () => {
    setIsAnimating(true);
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <>
      <nav className="bg-slate-800 text-white py-4 px-0 fixed top-0 w-full z-50 shadow-lg border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* Logo with design */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-2 bg-white/20 rounded-full animate-pulse"></div>
              <div className="relative bg-white text-slate-800 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                🏓
              </div>
            </div>
            <div className="text-2xl font-bold">
              <span className="text-white">IMC</span>
              <span className="text-green-400 ml-2">Pickle Ball</span>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            {/* Book Your Spot Button with Animation */}
            <button 
  className="relative group flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 overflow-hidden"
>
  {/* Sliding Icon */}
  <img
    src="https://www.playspots.in/wp-content/uploads/2024/11/sport-mode-1.png"
    alt="Book Icon"
    className="w-6 h-6 transition-transform duration-300 ease-out group-hover:translate-x-2"
  />
  
  {/* Button Text */}
  <span className="whitespace-nowrap">Book Your Spot</span>
</button>

            {/* Hamburger menu */}
            <button
              className="flex flex-col gap-1 cursor-pointer p-2 hover:bg-slate-700 rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
        ></div>

        {/* Sidebar - White background */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Sidebar Header - Navy blue */}
          <div className="p-6 border-b bg-slate-800 text-white flex-shrink-0">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                  🏓
                </div>
                <div>
                  <h3 className="font-bold text-lg">IMC Pickle Ball</h3>
                  <p className="text-sm opacity-90">Navigation Menu</p>
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              {/* Navigation Links - Navy blue accents */}
              <nav className="space-y-4 mb-8">
                <a
                  href="#home"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                  onClick={closeMenu}
                >
                  <div className="w-10 h-10 bg-slate-100 group-hover:bg-slate-800 group-hover:text-white rounded-lg flex items-center justify-center transition-all">
                    🏠
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 group-hover:text-slate-900">
                      Home
                    </div>
                    <div className="text-sm text-slate-600">Main page</div>
                  </div>
                </a>

                <a
                  href="#gallery"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                  onClick={closeMenu}
                >
                  <div className="w-10 h-10 bg-slate-100 group-hover:bg-slate-800 group-hover:text-white rounded-lg flex items-center justify-center transition-all">
                    📸
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 group-hover:text-slate-900">
                      Gallery
                    </div>
                    <div className="text-sm text-slate-600">Court photos</div>
                  </div>
                </a>

                <a
                  href="#location"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                  onClick={closeMenu}
                >
                  <div className="w-10 h-10 bg-slate-100 group-hover:bg-slate-800 group-hover:text-white rounded-lg flex items-center justify-center transition-all">
                    📍
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 group-hover:text-slate-900">
                      Location
                    </div>
                    <div className="text-sm text-slate-600">Find us here</div>
                  </div>
                </a>

                {/* <a 
                  href="#contact" 
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                  onClick={closeMenu}
                >
                  <div className="w-10 h-10 bg-slate-100 group-hover:bg-slate-800 group-hover:text-white rounded-lg flex items-center justify-center transition-all">
                    📞
                  </div> 
                   <div>
                    <div className="font-semibold text-slate-800 group-hover:text-slate-900">Contact</div>
                    <div className="text-sm text-slate-600">Get in touch</div>
                  </div>
                </a> */}

                <a
                  href="#about"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                  onClick={closeMenu}
                >
                  <div className="w-10 h-10 bg-slate-100 group-hover:bg-slate-800 group-hover:text-white rounded-lg flex items-center justify-center transition-all">
                    ℹ️
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 group-hover:text-slate-900">
                      About Us
                    </div>
                    <div className="text-sm text-slate-600">Learn more</div>
                  </div>
                </a>
              </nav>

              {/* Quick Actions - Navy blue theme */}
              <div className="pt-6 border-t border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-4">
                  Quick Actions
                </h4>
                <div className="space-y-3">
                  <button className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md">
                    🏓 Book Now
                  </button>
                  <button className="w-full bg-white hover:bg-slate-50 text-slate-800 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 border border-slate-300 shadow-sm">
                    📞 Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Footer - Light navy background */}
          <div className="flex-shrink-0 p-6 bg-slate-100 border-t border-slate-200">
            <div className="text-center">
              <p className="text-sm text-slate-600">Operating Hours</p>
              <p className="font-semibold text-slate-800">8:00 AM - 9:00 PM</p>
              <p className="text-xs text-slate-500 mt-1">All Days</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

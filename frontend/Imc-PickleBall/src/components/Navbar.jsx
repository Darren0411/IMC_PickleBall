import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Fetch logged in user on mount
  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/me", { withCredentials: true })
      .then(({ data }) => {
        if (data.success) setUser(data.user);
      })
      .catch(() => console.log("No logged-in user"));
  }, []);

  // Openers / closers
  const openLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const openSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleLogout = async () => {
    await axios.post("http://localhost:4000/auth/logout", {}, { withCredentials: true });
    setUser(null);
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-slate-800 text-white py-4 px-0 fixed top-0 w-full z-50 shadow-lg border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
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

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="relative group flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <img
                src="https://www.playspots.in/wp-content/uploads/2024/11/sport-mode-1.png"
                alt="Book Icon"
                className="w-6 h-6 transition-transform duration-300 ease-out group-hover:translate-x-2"
              />
              <span className="whitespace-nowrap">Book Your Spot</span>
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg?20200418092106"
                    alt="Profile"
                     className="w-12 h-12 rounded-full border border-gray-300"
                     
                  />
                  <span>{user.name}</span>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
                    <Link
                      to="/bookings"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      View Bookings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={openLogin}
                className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105"
              >
                Login / Signup
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Modals */}
      {showLogin && (
        <LoginPage
          onClose={() => setShowLogin(false)}
          onSwitchToSignup={openSignup}
          onLoginSuccess={(loggedInUser) => {
            setUser(loggedInUser);
            setShowLogin(false);
          }}
        />
      )}
      {showSignup && (
        <SignupPage
          onClose={() => setShowSignup(false)}
          onSwitchToLogin={openLogin}
        />
      )}
    </>
  );
};

export default Navbar;

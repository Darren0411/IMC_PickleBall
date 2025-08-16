import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

const LoginPage = ({ onSwitchToSignup, onClose }) => {
  const [formData, setFormData] = useState({
    mobile: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/auth/login", formData, {
        withCredentials: true
      });
      if (response.data.message) {
      toast.success("Login successful!");
        onClose();
        window.location.reload();
      }
    } catch (err) {
    const errorMsg = err.response?.data?.error || "Login failed. Please try again.";
    setError(errorMsg);
  } finally {
    setLoading(false);
  }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            ✕
          </button>

          {/* Header with Pickle Ball Theme */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-8 pb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl">
                🏓
              </div>
              <div>
                <h2 className="text-2xl font-bold">Welcome Back!</h2>
                <p className="text-slate-300 text-sm">Sign in to IMC Pickle Ball</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 -mt-6 relative">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 text-sm">📱</span>
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 text-sm">🔒</span>
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Signing In...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>

              {/* Switch to Signup */}
              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                  Don't have an account?{" "}
                  <button
                    onClick={onSwitchToSignup}
                    className="text-green-600 hover:text-green-700 font-semibold hover:underline"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginPage;

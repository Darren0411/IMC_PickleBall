import React, { useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:4000"; 

const LoginModal = ({ onClose, onNext }) => {
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mobile.length !== 10 || isNaN(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // Send POST request to backend OTP route
      const { data } = await axios.post(`${API_BASE}/otp/send`, {
        phone: `+91${mobile}`, // E.164 format required for Twilio
      });

      console.log("OTP sent successfully:", data);
      onNext(mobile);

    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Login/Signup</h2>

        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            maxLength="10"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-green-400" : "bg-green-500 hover:bg-green-600"
            } text-white font-semibold py-2 rounded-lg`}
          >
            {loading ? "Sending OTP..." : "Get OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

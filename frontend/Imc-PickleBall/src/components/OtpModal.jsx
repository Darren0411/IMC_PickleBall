import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = "http://localhost:4000/otp"; // Change if needed

const OTPModal = ({ onClose, mobile }) => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60); // Countdown seconds
  const [resendEnabled, setResendEnabled] = useState(false);

  useEffect(() => {
    if (timer === 0) {
      setResendEnabled(true);
      return;
    }
    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      try {
        const { data } = await axios.post(`${API_BASE}/verify`, {
          phone: "+91" + mobile,
          code: otp,
        });
        if (data.success) {
          alert("OTP Verified Successfully!");
          onClose();
        } else {
          alert(data.message || "Invalid OTP");
        }
      } catch (error) {
        alert("Failed to verify OTP. Please try again.");
      }
    }
  };

  const handleResend = async () => {
    if (!resendEnabled) return;
    try {
      await axios.post(`${API_BASE}/send`, { phone: "+91" + mobile, });
      alert("OTP resent successfully.");
      setTimer(60);
      setResendEnabled(false);
    } catch (error) {
      alert("Failed to resend OTP. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &#10005;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Enter OTP</h2>
        <p className="text-center text-gray-500 mb-4">
          Sent to {mobile}
        </p>
        <form onSubmit={handleVerify} className="space-y-4">
          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            maxLength="6"
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg"
          >
            Verify OTP
          </button>
        </form>
        <div className="mt-4 text-center">
          {resendEnabled ? (
            <button
              onClick={handleResend}
              className="text-green-600 hover:underline"
            >
              Resend OTP
            </button>
          ) : (
            <p className="text-gray-500">Resend OTP in {timer} seconds</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OTPModal;

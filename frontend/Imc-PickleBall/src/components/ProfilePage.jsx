import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE = "http://localhost:4000"; // change if needed

const ProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) {
          toast.error("Not logged in. Please log in first.");
          return;
        }

        const { data } = await axios.get(`${API_BASE}/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
      } catch (error) {
        toast.error("Failed to fetch profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  if (!user) {
    return <div className="text-center mt-20">User not found</div>;
  }

  return (
    <>
      <Navbar />
      <ToastContainer position="top-center" />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <div className="flex items-center gap-6">
          <img
            src={user.profilePic || "/default-avatar.png"}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">About</h3>
          <p className="text-gray-700 mt-2">{user.bio || "No bio available"}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;

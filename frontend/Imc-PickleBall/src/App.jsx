import React from "react";
import HomePage from "./pages/Home";
import BookSlot from "./pages/BookSlot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Router>
        <Toaster position="top-center" reverseOrder={false} />

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookslot" element={<BookSlot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookSlot from './pages/BookSlot';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
           {/* Public Routes */}
          <Route path='/' element={<HomePage/>} />
          <Route path='/bookslot' element={<BookSlot/>} />
        </Routes>


      </Router>

    </div>
  );
}

export default App;

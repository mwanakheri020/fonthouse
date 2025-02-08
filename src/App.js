import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import Login from './components/Login';
import House from './components/House';
import Review from './components/Review';
import Booking from './components/Booking';
import './App.css'; // Import global styles

function App() {
  // const handleLogin = (email, password) => {
  //   console.log("Logged in with:", email, password);
  //   // Add your login logic here
  // };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* <Route path="/" element={<Login onLogin={handleLogin} />} /> Login Page */}
          <Route path="/home" element={<Home />} /> {/* Home Page */}
          <Route path="/house" element={<House />} /> {/* House Page */}
          <Route path="/review" element={<Review />} /> {/* Review Page */}
          <Route path="/booking" element={<Booking />} /> {/* Booking Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
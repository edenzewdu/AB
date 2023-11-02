import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ShopPage from './pages/ShopPage';
import Dashboard from './pages/Admin/Dashboard';
import AdminLogin from './pages/Admin/AdminLogin';
import UserLogin from './pages/UserLogin';
import RegistrationForm from './pages/UserRegistration';


function App() {
  const isAuthenticated = checkUserAuthentication(); // Replace with your authentication logic

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/userRegister" element={<RegistrationForm />} />

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/admin/login" replace />}
          />
        </Routes>
      </Router>
    </div>
  );
}

function checkUserAuthentication() {
  const token = localStorage.getItem('token'); // Example: Check if a token exists in local storage
  return !!token; // Return true if a token exists, false otherwise
}

export default App;
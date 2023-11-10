import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ShopPage from './pages/ShopPage';
import AdminLogin from './pages/Admin/AdminLogin';
import UserLogin from './pages/UserLogin';
import RegistrationForm from './pages/UserRegistration';
import { useState } from "react";
import Topbar from "./pages/Admin/scenes/global/Topbar";
import Sidebar from "./pages/Admin/scenes/global/Sidebar";
import Dashboard from "./pages/Admin/scenes/dashboard";
import Team from "./pages/Admin/scenes/team";
import Invoices from "./pages/Admin/scenes/invoices";
import Contacts from "./pages/Admin/scenes/contacts";
import Bar from "./pages/Admin/scenes/bar";
import Form from "./pages/Admin/scenes/form";
import Line from "./pages/Admin/scenes/line";
import Pie from "./pages/Admin/scenes/pie";
import FAQ from "./pages/Admin/scenes/faq";
import Geography from "./pages/Admin/scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./pages/Admin/scenes/calendar/calendar";


function App() {
  const isAuthenticated = checkUserAuthentication(); // Replace with your authentication logic
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

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
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </div>
  );
}

function checkUserAuthentication() {
  const token = localStorage.getItem('token'); // Example: Check if a token exists in local storage
  return !!token; // Return true if a token exists, false otherwise
}

export default App;
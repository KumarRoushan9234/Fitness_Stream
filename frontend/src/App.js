import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";  

import NoLayout from "./components/NoLayout"; 

import LandingPage from "./components/LandingPage";  
import Dashboard from "./components/Dashboard";  
import { ToastContainer } from "react-toastify";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ImageSlider from "./components/ImageSlider/ImageSlider";

function App() {
  return (
    <Router>
      <Routes>
        {/* Pages without header and footer */}
        <Route path="/" element={<NoLayout><LandingPage /></NoLayout>} />
        <Route path="/login" element={<NoLayout><Login/></NoLayout>} />
        <Route path="/signup" element={<NoLayout><Signup/></NoLayout>} />

        <Route path="/slider" element={<NoLayout><ImageSlider/></NoLayout>} />

        {/* Pages with header and footer */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;

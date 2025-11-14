import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./front/Home.jsx";
import Admin from "./admin/Admin.jsx";
import Login from './auth/LoginForm.jsx';
import Register from './auth/RegisterForm.jsx';
import Profile from "./front/layouts/profile.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;

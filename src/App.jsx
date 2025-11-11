import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./front/Home.jsx";
import Admin from "./admin/Admin.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;

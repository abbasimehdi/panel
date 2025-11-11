import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./front/Home.jsx";
const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <div className="flex-grow-1">
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

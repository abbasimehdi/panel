import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <span className="navbar-brand">Admin Dashboard</span>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a href="#" className="nav-link">Profile</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

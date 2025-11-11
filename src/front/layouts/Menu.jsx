import React from "react";
import Auth from "./Auth.jsx"; // import the new Auth component

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" dir="rtl">
      <div className="container position-relative">
        {/* Auth buttons on visual left */}
        <div className="position-absolute start-0">
          <Auth />
        </div>

        {/* Centered brand */}
        <a className="navbar-brand mx-auto fw-bold" href="#">مای اپ</a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="تغییر ناوبری"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Main menu */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">خانه</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">درباره ما</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                خدمات
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><a className="dropdown-item" href="#">توسعه وب</a></li>
                <li><a className="dropdown-item" href="#">توسعه اپلیکیشن</a></li>
                <li><a className="dropdown-item" href="#">بهینه‌سازی سئو</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">مشاوره</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">تماس با ما</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

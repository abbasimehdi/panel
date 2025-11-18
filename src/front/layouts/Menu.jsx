import React from "react";
import { Link } from "react-router-dom";   // React Router navigation
import Auth from "./auth/Auth.jsx";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" dir="rtl">
      <div className="container position-relative">

        {/* Auth buttons on visual left */}
        <div className="position-absolute start-0">
          <Auth />
        </div>

        {/* Centered brand */}
        <Link className="navbar-brand mx-auto fw-bold" to="/">
          مای اپ
        </Link>

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

            {/* HOME */}
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                خانه
              </Link>
            </li>

            {/* ABOUT */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                درباره ما
              </Link>
            </li>

            {/* SERVICES DROPDOWN */}
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
                <li><Link className="dropdown-item" to="/web-development">توسعه وب</Link></li>
                <li><Link className="dropdown-item" to="/app-development">توسعه اپلیکیشن</Link></li>
                <li><Link className="dropdown-item" to="/seo">بهینه‌سازی سئو</Link></li>

                <li><hr className="dropdown-divider" /></li>

                <li><Link className="dropdown-item" to="/consulting">مشاوره</Link></li>
              </ul>
            </li>

            {/* CONTACT */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                تماس با ما
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

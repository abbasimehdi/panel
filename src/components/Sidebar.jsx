import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/sidebar.css"; // import the CSS

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "داشبورد", icon: "bi-speedometer2" },
    { path: "/users", label: "کاربران", icon: "bi-people" },
    { path: "/settings", label: "تنظیمات", icon: "bi-gear" },
  ];

  return (
    <div className="sidebar d-flex flex-column p-3 text-white">
      <h4 className="mb-4 text-center">پنل مدیریت</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map((item) => (
          <li className="nav-item mb-2" key={item.path}>
            <Link
              to={item.path}
              className={`nav-link d-flex align-items-center ${
                location.pathname === item.path ? "active" : "text-white"
              }`}
            >
              <i className={`bi ${item.icon} me-2`}></i>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

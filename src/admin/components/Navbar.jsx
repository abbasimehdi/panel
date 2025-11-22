import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="bg-dark text-light p-3"
      style={{
        width: "250px",
        minHeight: "100vh",   // ensures full viewport height
        overflowY: "auto",    // scrollable if content grows
      }}
    >
      <h3 className="mb-4">پنل مدیریت</h3>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavLink
            className={({ isActive }) =>
              `nav-link text-light ${isActive ? "fw-bold text-warning" : ""}`
            }
            to="/admin/dashboard"
          >
            داشبورد
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            className={({ isActive }) =>
              `nav-link text-light ${isActive ? "fw-bold text-warning" : ""}`
            }
            to="/admin/users"
          >
            کاربران
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            className={({ isActive }) =>
              `nav-link text-light ${isActive ? "fw-bold text-warning" : ""}`
            }
            to="/admin/categories"
          >
            دسته بندی
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

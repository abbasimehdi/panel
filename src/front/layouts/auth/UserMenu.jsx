// components/Auth/UserMenu.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserMenu = ({ logout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="position-relative">
      <button className="btn btn-light" onClick={() => setShowDropdown(!showDropdown)}>
        👤 حساب کاربری
      </button>

      {showDropdown && (
        <div
          className="dropdown-menu show"
          style={{ right: 0, left: "auto", textAlign: "right" }}
        >
          <button className="dropdown-item" onClick={() => navigate("/profile")}>
            پروفایل
          </button>

          <button className="dropdown-item" onClick={() => navigate("/admin")}>
            ادمین
          </button>

          <div className="dropdown-divider"></div>

          <button
            className="dropdown-item text-danger"
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            خروج
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

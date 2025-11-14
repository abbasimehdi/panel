import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Auth = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  if (user) {
    return (
      <div className="position-relative">
        <button
          className="btn btn-light"
          onClick={toggleDropdown}
        >
          👤 حساب کاربری
        </button>

        {showDropdown && (
          <div
            className="dropdown-menu show"
            style={{ right: 0, left: "auto", textAlign: "right" }}
          >
            <button
              className="dropdown-item"
              onClick={() => navigate("/profile")}
            >
              پروفایل
            </button>

            <button
              className="dropdown-item"
              onClick={() => navigate("/admin")}
            >
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
  }

  // Not logged in → Show original buttons
  return (
    <div className="d-flex gap-2">
      <button className="btn btn-outline-light" onClick={() => navigate("/register")}>
        ثبت نام
      </button>
      <button className="btn btn-light" onClick={() => navigate("/login")}>
        ورود
      </button>
    </div>
  );
};

export default Auth;

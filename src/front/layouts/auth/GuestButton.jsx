// components/Auth/GuestButtons.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const GuestButtons = () => {
  const navigate = useNavigate();

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

export default GuestButtons;

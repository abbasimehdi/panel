import React from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleAdmin = () => {
    navigate("/admin");
  };

  return (
    <div className="d-flex gap-2">
      <button className="btn btn-outline-light" onClick={handleRegister}>ثبت نام</button>
      <button className="btn btn-light" onClick={handleLogin}>ورود</button>
      <button className="btn btn-warning" onClick={handleAdmin}>ادمین</button>
    </div>
  );
};

export default Auth;

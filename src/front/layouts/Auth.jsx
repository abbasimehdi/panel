import React from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Here you can add real authentication logic
    navigate("/admin");
  };

  return (
    <div className="d-flex">
      <a className="btn btn-outline-light me-2" href="#">ثبت نام</a>
      <button className="btn btn-light" onClick={handleLogin}>ورود</button>
    </div>
  );
};

export default Auth;

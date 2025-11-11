// src/auth/LoginForm.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import loginBackground from "../assets/login.png"; // correct relative path

function LoginForm({ goToRegister }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = [];

    // Email validation
    if (!formData.email) {
      validationErrors.push("لطفاً ایمیل خود را وارد کنید.");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.push("لطفاً یک ایمیل معتبر وارد کنید.");
    }

    // Password validation
    if (!formData.password) {
      validationErrors.push("لطفاً رمز عبور خود را وارد کنید.");
    } else if (formData.password.length < 8) {
      validationErrors.push("رمز عبور باید حداقل ۸ کاراکتر باشد.");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);
    console.log("اطلاعات ورود:", formData);
    alert("ورود با موفقیت انجام شد! (demo)");
  };

  return (
    <div
      dir="rtl"
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        textAlign: "right",
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "22rem",
          backgroundColor: "rgba(255, 255, 255, 0.9)", // slightly transparent card
        }}
      >
        <h3 className="text-center mb-4">ورود</h3>

        {errors.length > 0 && (
          <div className="alert alert-danger">
            <ul className="mb-0">
              {errors.map((err, index) => (
                <li key={index}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">ایمیل</label>
            <input
              type="email"
              className="form-control text-end"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ایمیل خود را وارد کنید"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">رمز عبور</label>
            <input
              type="password"
              className="form-control text-end"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="رمز عبور خود را وارد کنید"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            ورود
          </button>
        </form>

        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-link p-0"
            onClick={goToRegister}
          >
            ثبت نام نکرده‌اید؟ ثبت نام
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

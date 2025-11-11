import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import registerBg from "../assets/register.jpg"; // make sure the path is correct

function RegisterForm({ goToLogin }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    mobile_number: "",
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = [];

    const persianFieldNames = {
      first_name: "نام",
      last_name: "نام خانوادگی",
      email: "ایمیل",
      password: "رمز عبور",
      confirm_password: "تأیید رمز عبور",
      mobile_number: "شماره موبایل",
    };

    for (let key in formData) {
      if (!formData[key]) validationErrors.push(`لطفاً ${persianFieldNames[key]} را وارد کنید.`);
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.push("لطفاً یک ایمیل معتبر وارد کنید.");
    }

    if (formData.password && formData.password.length < 8) {
      validationErrors.push("رمز عبور باید حداقل ۸ کاراکتر باشد.");
    }

    if (formData.password && formData.confirm_password && formData.password !== formData.confirm_password) {
      validationErrors.push("رمز عبور و تأیید رمز عبور مطابقت ندارند.");
    }

    if (formData.mobile_number && !/^\d{10}$/.test(formData.mobile_number)) {
      validationErrors.push("لطفاً شماره موبایل ۱۰ رقمی معتبر وارد کنید.");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);
    console.log("اطلاعات ثبت نام:", formData);
    alert("ثبت نام با موفقیت انجام شد! (demo)");
  };

  return (
    <div
      dir="rtl"
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        textAlign: "right",
        backgroundImage: `url(${registerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card shadow-lg p-4" style={{ width: "25rem", backgroundColor: "rgba(255,255,255,0.9)" }}>
        <h3 className="text-center mb-4">ثبت نام</h3>

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
            <label className="form-label">نام</label>
            <input
              type="text"
              className="form-control text-end"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="نام خود را وارد کنید"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">نام خانوادگی</label>
            <input
              type="text"
              className="form-control text-end"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="نام خانوادگی خود را وارد کنید"
            />
          </div>

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

          <div className="mb-3">
            <label className="form-label">تأیید رمز عبور</label>
            <input
              type="password"
              className="form-control text-end"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              placeholder="رمز عبور را دوباره وارد کنید"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">شماره موبایل</label>
            <input
              type="text"
              className="form-control text-end"
              name="mobile_number"
              value={formData.mobile_number}
              onChange={handleChange}
              placeholder="شماره موبایل خود را وارد کنید"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            ثبت نام
          </button>
        </form>

        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-link p-0"
            onClick={goToLogin}
          >
            قبلاً ثبت نام کرده‌اید؟ ورود
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;

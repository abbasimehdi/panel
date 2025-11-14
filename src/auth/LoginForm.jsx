import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import loginBackground from "../assets/login.png";
import apiClient from "../api/apiClient";
import { AuthContext } from "../front/context/AuthContext";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.email) newErrors.email = "لطفاً ایمیل خود را وارد کنید.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "ایمیل معتبر نیست.";

    if (!formData.password) newErrors.password = "لطفاً رمز عبور خود را وارد کنید.";
    else if (formData.password.length < 6) newErrors.password = "رمز عبور باید حداقل ۶ کاراکتر باشد.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await apiClient.post("/login", {
        email: formData.email,
        password: formData.password,
      });

      const token = response.data.token;

      // Save token into AuthContext + localStorage
      login(token);

      alert("ورود با موفقیت انجام شد!");
      navigate("/");

    } catch (error) {
      console.error(error);

      if (error.response && error.response.data) {
        alert(error.response.data.message || "ورود ناموفق بود.");
      } else {
        alert("خطا در ارتباط با سرور.");
      }
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `form-control text-end ${errors[field] ? "is-invalid" : ""}`;

  return (
    <div
      dir="rtl"
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        textAlign: "right",
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ width: "22rem", backgroundColor: "rgba(255,255,255,0.9)" }}
      >
        <h3 className="text-center mb-4">ورود</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">ایمیل</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass("email")}
              placeholder="ایمیل خود را وارد کنید"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">رمز عبور</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={inputClass("password")}
              placeholder="رمز عبور خود را وارد کنید"
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "در حال ورود..." : "ورود"}
          </button>
        </form>

        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-link p-0"
            onClick={() => navigate("/register")}
          >
            ثبت نام نکرده‌اید؟ ثبت نام
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

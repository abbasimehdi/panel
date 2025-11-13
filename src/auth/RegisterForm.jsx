import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerBg from '../assets/register.jpg';
import apiClient from '../api/apiClient';

function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    mobile_number: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'لطفاً نام را وارد کنید.';
    if (!formData.last_name) newErrors.last_name = 'لطفاً نام خانوادگی را وارد کنید.';
    if (!formData.email) newErrors.email = 'لطفاً ایمیل را وارد کنید.';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'لطفاً یک ایمیل معتبر وارد کنید.';

    if (!formData.password) newErrors.password = 'لطفاً رمز عبور را وارد کنید.';
    else if (formData.password.length < 8)
      newErrors.password = 'رمز عبور باید حداقل ۸ کاراکتر باشد.';

    if (!formData.confirm_password)
      newErrors.confirm_password = 'لطفاً تأیید رمز عبور را وارد کنید.';
    else if (formData.password !== formData.confirm_password)
      newErrors.confirm_password = 'رمز عبور و تأیید مطابقت ندارند.';

    if (!formData.mobile_number)
      newErrors.mobile_number = 'لطفاً شماره موبایل را وارد کنید.';
    else if (!/^\d{10}$/.test(formData.mobile_number))
      newErrors.mobile_number = 'لطفاً شماره موبایل ۱۰ رقمی معتبر وارد کنید.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const payload = {
        name: formData.name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
        mobile_number: formData.mobile_number,
      };

      const response = await apiClient.post('/register', payload);
      const data = response.data;

      console.log('Registered user:', data);
      alert('ثبت نام با موفقیت انجام شد!');
      navigate('/login');
    } catch (error) {
      console.error('Error registering:', error);
      if (error.response && error.response.data) {
        const respData = error.response.data;
        if (respData.errors) {
          setErrors(respData.errors);
        } else if (respData.message) {
          alert(respData.message);
        } else {
          alert('خطا در ثبت نام. لطفاً دوباره تلاش کنید.');
        }
      } else {
        alert('خطا در ثبت نام. لطفاً دوباره تلاش کنید.');
      }
    }
  };

  const inputClass = (field) =>
    `form-control text-end ${errors[field] ? 'is-invalid' : ''}`;

  return (
    <div
      dir="rtl"
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        textAlign: 'right',
        backgroundImage: `url(${registerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ width: '25rem', backgroundColor: 'rgba(255,255,255,0.9)' }}
      >
        <h3 className="text-center mb-4">ثبت نام</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">نام</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass('name')}
              placeholder="نام خود را وارد کنید"
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">نام خانوادگی</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className={inputClass('last_name')}
              placeholder="نام خانوادگی خود را وارد کنید"
            />
            {errors.last_name && <div className="invalid-feedback">{errors.last_name}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">ایمیل</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass('email')}
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
              className={inputClass('password')}
              placeholder="رمز عبور خود را وارد کنید"
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">تأیید رمز عبور</label>
            <input
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              className={inputClass('confirm_password')}
              placeholder="رمز عبور را دوباره وارد کنید"
            />
            {errors.confirm_password && (
              <div className="invalid-feedback">{errors.confirm_password}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">شماره موبایل</label>
            <input
              type="text"
              name="mobile_number"
              value={formData.mobile_number}
              onChange={handleChange}
              className={inputClass('mobile_number')}
              placeholder="شماره موبایل خود را وارد کنید"
            />
            {errors.mobile_number && (
              <div className="invalid-feedback">{errors.mobile_number}</div>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100">
            ثبت نام
          </button>
        </form>

        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-link p-0"
            onClick={() => navigate('/login')}
          >
            قبلاً ثبت نام کرده‌اید؟ ورود
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;

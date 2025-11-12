// src/components/Service.jsx
import React from "react";

const Service = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">خدمات ما</h2>
        <div className="row g-4">
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <h5 className="card-title">توسعه وب</h5>
                <p className="card-text">ساخت وب‌سایت‌های ریسپانسیو و مدرن که کاربران را جذب می‌کنند.</p>
                <a href="#" className="btn btn-primary">بیشتر بدانید</a>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <h5 className="card-title">توسعه اپلیکیشن</h5>
                <p className="card-text">ساخت اپلیکیشن‌های موبایل برای iOS و اندروید با تجربه‌ای بی‌نقص.</p>
                <a href="#" className="btn btn-primary">بیشتر بدانید</a>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <h5 className="card-title">بهینه‌سازی سئو</h5>
                <p className="card-text">بهبود رتبه وب‌سایت شما و جذب مشتریان بیشتر آنلاین.</p>
                <a href="#" className="btn btn-primary">بیشتر بدانید</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

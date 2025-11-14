// src/components/Slideshow.jsx
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Slideshow = () => {
  return (
    <section className="py-5">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src="https://s.tmimgcdn.com/scr/800x500/107500/e-learning-online-courses-website-template_107581-original.jpg" className="d-block w-100" alt="اسلاید ۱" />
            <div className="carousel-caption d-none d-md-block text-start">
              <h1 className="fw-bold">خوش آمدید به مای اپ</h1>
              <p>ما بهترین راهکارها را برای کسب و کار شما ارائه می‌دهیم.</p>
              <a href="#" className="btn btn-primary me-2">شروع کنید</a>
              <a href="#" className="btn btn-outline-primary">بیشتر بدانید</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img src="https://static-cse.canva.com/blob/1133681/Untitleddesign.png" className="d-block w-100" alt="اسلاید ۲" />
            <div className="carousel-caption d-none d-md-block text-start">
              <h1 className="fw-bold">خدمات حرفه‌ای ما</h1>
              <p>توسعه وب، اپلیکیشن و بهینه‌سازی سئو با کیفیت عالی.</p>
              <a href="#" className="btn btn-primary me-2">خدمات ما</a>
              <a href="#" className="btn btn-outline-primary">تماس با ما</a>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img src="https://olitt.com/blog/wp-content/uploads/2021/10/Free-website.jpg" className="d-block w-100" alt="اسلاید ۳" />
            <div className="carousel-caption d-none d-md-block text-start">
              <h1 className="fw-bold">راهکارهای نوآورانه</h1>
              <p>با مای اپ کسب و کار خود را به سطح بعدی ببرید.</p>
              <a href="#" className="btn btn-primary me-2">شروع کنید</a>
              <a href="#" className="btn btn-outline-primary">بیشتر بدانید</a>
            </div>
          </div>

        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">قبلی</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">بعدی</span>
        </button>

        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="اسلاید ۱"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="اسلاید ۲"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="اسلاید ۳"></button>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;

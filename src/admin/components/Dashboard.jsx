import React from "react";

const Dashboard = () => {
  return (
    <div className="container-fluid" dir="rtl">
      <h2 className="my-4">نمای کلی داشبورد</h2>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>کل کاربران</h5>
              <p>۱۰۲۴</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>درآمد</h5>
              <p>$۱۲,۳۴۵</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>اشتراک‌های فعال</h5>
              <p>۲۱۵</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

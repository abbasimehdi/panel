import React from "react";
import SummaryCard from "./SummaryCard.jsx";
import ChartComponent from "./Chart.jsx";
import AreaChart from "./AeaChart.jsx";
import CircleChart from "./CircleChart.jsx";

const Dashboard = () => {
  return (
    <div className="container-fluid" dir="rtl">
      <h2 className="my-4">نمای کلی داشبورد</h2>

      {/* Summary Cards */}
      <div className="row">
        <SummaryCard title="کل کاربران" value="۱۰۲۴" />
        <SummaryCard title="درآمد" value="$۱۲,۳۴۵" />
        <SummaryCard title="اشتراک‌های فعال" value="۲۱۵" />
      </div>

      {/* Circle Chart after summary cards */}
      <div className="row">
        <div className="col-12 col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">وضعیت کاربران</h5>
              <CircleChart minHeight={300} />
            </div>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="row">
        <div className="col-12 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">نمودار فروش</h5>
              <ChartComponent minHeight={350} />
            </div>
          </div>
        </div>
      </div>

      {/* Area Chart */}
      <div className="row">
        <div className="col-12 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">نمودار درآمد ماهانه</h5>
              <AreaChart minHeight={350} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// StatsCards.jsx

import React from "react";

const StatsCards = ({ cardColors, categories, pagination }) => {
  const stats = [
    { value: pagination.total, label: "تعداد کل", icon: "fa-layer-group", color: cardColors[0] },
    { value: categories.filter(c => c.parent_id === null).length, label: "دسته‌بندی اصلی", icon: "fa-folder", color: cardColors[1] },
    { value: categories.filter(c => c.parent_id !== null).length, label: "زیردسته", icon: "fa-folder-open", color: cardColors[2] },
    { value: categories.filter(c => c.icon).length, label: "دارای آیکون", icon: "fa-icons", color: cardColors[3] },
  ];

  return (
    <div className="row mb-4">
      {stats.map((item, i) => (
        <div className="col-md-3 mb-3" key={i}>
          <div
            className="card shadow-lg h-100"
            style={{
              background: item.color.bg,
              border: "none",
              borderRadius: "15px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div className={`card-body d-flex align-items-center ${item.color.text}`}>
              <div className="flex-grow-1">
                <h4 className="mb-1">{item.value}</h4>
                <p className="mb-0 opacity-75">{item.label}</p>
              </div>
              <i className={`fas ${item.icon} fa-2x opacity-75`}></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;

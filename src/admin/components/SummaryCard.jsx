import React from "react";

const SummaryCard = ({ title, value }) => {
  // Function to generate a random pastel color
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 156 + 100); // 100-255
    const g = Math.floor(Math.random() * 156 + 100);
    const b = Math.floor(Math.random() * 156 + 100);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const bgColor = getRandomColor();

  return (
    <div className="col-md-4 mb-3">
      <div
        className="card shadow-sm text-center"
        style={{ backgroundColor: bgColor, color: "#fff" }}
      >
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text fs-4 fw-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;

import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const CircleChart = ({ data, options, minHeight = 300 }) => {
  // Default example data
  const defaultData = {
    labels: ["کاربران فعال", "کاربران غیرفعال", "مشترکین جدید"],
    datasets: [
      {
        label: "کاربران",
        data: [50, 30, 20],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "وضعیت کاربران" },
    },
  };

  return (
    <div style={{ minHeight: `${minHeight}px`, width: "100%" }}>
      <Doughnut data={data || defaultData} options={options || defaultOptions} />
    </div>
  );
};

export default CircleChart;

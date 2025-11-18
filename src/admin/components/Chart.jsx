import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ className = "", style = {}, minHeight = 300 }) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [12, 45, 22, 67, 35],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // important
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Sales" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  // wrapper gives canvas a height to fill; users can override via props
  const wrapperStyle = {
    minHeight: `${minHeight}px`,
    width: "100%",
    ...style,
  };

  return (
    <div className={`${className}`}>
      <div style={wrapperStyle}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;

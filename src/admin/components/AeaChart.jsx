import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AreaChart = ({ data, options, minHeight = 350 }) => {
  // Default example data
  const defaultData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "درآمد ماهانه",
        data: [300, 500, 400, 700, 600, 800],
        fill: true, // This creates the area under the line
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.4, // smooth curve
      },
    ],
  };

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "نمودار درآمد ماهانه" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div style={{ minHeight: `${minHeight}px`, width: "100%" }}>
      <Line data={data || defaultData} options={options || defaultOptions} />
    </div>
  );
};

export default AreaChart;

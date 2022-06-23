import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { options } from "./config";
ChartJS.register(CategoryScale, LinearScale, BarElement);

function BarChart({data}) {
  
  return (
    <div className="attendancedb">
      <div className="title__container">
        <h3 className="title__container-title">Attendance</h3>
        <div className="sortResult">
          Sort by:
          <select defaultValue={"Month"}>
            <option>Days</option>
            <option>Weeks</option>
            <option>Months</option>
            <option>Year</option>
          </select>
        </div>
      </div>
      <div className="attendancedb__body">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default BarChart;

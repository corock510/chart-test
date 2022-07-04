import React from "react";
import { Radar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const chart = {
  width: "40%",
  display: "flex",
};
const data = {
  labels: ["a", "b", "c", "d", "e", "f"],
  datasets: [
    {
      label: "title",
      data: [2, 2, 3, 3, 1, 2],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
    },
  ],
};

const options = {
  scales: {
    r: {
      min: 0,
      max: 5,
      stepSize: 1,
    },
  },
};

function App() {
  return (
    <>
      <div style={chart} className="chart">
        <Radar data={data} options={options} />
        <Radar data={data} />
      </div>
    </>
  );
}

export default App;

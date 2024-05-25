// chartConfig.ts
import { ChartConfiguration } from "chart.js";

import { Chart, Tooltip } from "chart.js";
export const chartConfig: ChartConfiguration = {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Data 1",
        backgroundColor: "rgba(183, 52, 255, 0.8)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
        stack: "stack 0",
      },
      {
        label: "Data 2",
        backgroundColor: "rgba(148, 142, 151, 1)",

        borderWidth: 1,
        data: [10, -10, -40, -19, -86, -27, -90],
        stack: "stack 0",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          color: "white",
          font: {
            size: 14,
          },
        },
      },
      x: {
        stacked: true,
        ticks: {
          color: "white",
          font: {
            size: 14,
          },
        },
      },
    },
    plugins: {
      title: {
        display: false,
        text: "Bar chart Demo",
        color: "white",
        font: {
          size: 24,
          family: "Helvetica",
        },
        align: "start",
        position: "top",
        padding: {
          top: 20,
          bottom: 10,
        },
      },
      legend: {
        display: false,
        position: "right",
        align: "center",
        labels: {
          font: {
            size: 14,
          },
          color: "white",
        },
      },
    },
  },
};

////////////////////////////////////////////////////////////////


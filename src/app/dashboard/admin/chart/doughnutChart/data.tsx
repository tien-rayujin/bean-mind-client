// chartConfig.ts
import { ChartConfiguration } from "chart.js";

import { Chart, Tooltip } from "chart.js";

////////////////////////////////////////////////////////////////

const pluginTextInside = {
  id: "textInside",
  beforeDraw: (chart: any) => {
    const ctx = chart.ctx;
    const { top, left, width, height } = chart.chartArea;
    const x = left + width / 2;
    const y = top + height / 2;
    const text = "750 users";
    ctx.fillStyle = "white"; // Set the color of the text
    ctx.font = "20px Arial"; // Set the font style and size
    ctx.textAlign = "center"; // Align the text to the center
    ctx.textBaseline = "middle"; // Align the text vertically to the middle
    ctx.fillText(text, x, y);
  },
};

export const donutChartConfig: ChartConfiguration = {
  type: "doughnut",
  data: {
    labels: [
      "Parents",
      "Teachers",
      "Students",
    ],
    datasets: [{
      label: "Users",
      data: [300, 50, 400],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 3,
      borderAlign: "center",
      borderColor: "gray",
      borderWidth: 2,
    }],
  },
  options: {
    
    responsive: true,
    plugins: {
      decimation: {},
      legend: {
        position: "bottom",
       display:false
      },
      title: {
        display: false,
        text: "Demo Chart",
        color: "black",
        align: "start",
        font: {
          size: 24,
          family: "Arial",
        },
      },
    },
  },
  plugins: [pluginTextInside],
};

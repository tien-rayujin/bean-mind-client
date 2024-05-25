// ChartComponent.tsx
"use client";
import React, { useEffect, useRef } from "react";
import { Chart, ChartConfiguration } from "chart.js/auto";
import { donutChartConfig } from "./data"; // Adjust the path as necessary

export default function DounghtnutChart() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const newChartInstance = new Chart(ctx, donutChartConfig);
        chartInstanceRef.current = newChartInstance;
      }
    }

    // Cleanup on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [chartRef]);

  return (
    <div>
      <canvas  ref={chartRef}></canvas>
    </div>
  );
}

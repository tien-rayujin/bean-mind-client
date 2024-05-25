// ChartComponent.tsx
"use client"
import React, { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import { chartConfig } from '../barChart/data'; // Adjust the path as necessary

export default function BarChart() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            // Destroy previous chart instance if it exists
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                const newChartInstance = new Chart(ctx, chartConfig);
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
        <div className='h-[550px] flex justify-start items-start ml-5'>
            <canvas ref={chartRef}></canvas>
        </div>
    );
}

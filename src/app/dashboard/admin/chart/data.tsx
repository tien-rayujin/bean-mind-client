// chartConfig.ts
import { ChartConfiguration } from 'chart.js';

export const chartConfig: ChartConfiguration = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [65, 59, 80, 81, 56, 55, 40],
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Đổi màu nếu cần
                borderColor: 'rgba(255, 99, 132, 1)', // Đổi màu nếu cần
                borderWidth: 1,
                data: [28, 48, 40, 19, 86, 27, 90], // Dữ liệu cho thanh thứ hai
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
};

export const donutChartConfig: ChartConfiguration = {
    type: 'doughnut',
    data: {
        labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [{
            label: 'Pie Chart',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
    }
};
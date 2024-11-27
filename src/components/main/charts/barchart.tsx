import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Bar Dataset',
        data: [20, 30, 40, 50, 60],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
};

export default BarChart;

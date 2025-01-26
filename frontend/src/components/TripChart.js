import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './TripChart.css';  // Импортируем стили

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TripChart = ({ trips }) => {
  const data = {
    labels: trips.map((_, index) => `Поездка ${index + 1}`),
    datasets: [
      {
        label: 'Расход топлива (л)',
        data: trips.map(trip => trip.total_fuel),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'История поездок',
      },
    },
  };

  return (
    <div className="chart-container">  {/* Добавляем контейнер с классом */}
      <Line data={data} options={options} />
    </div>
  );
};

export default TripChart;
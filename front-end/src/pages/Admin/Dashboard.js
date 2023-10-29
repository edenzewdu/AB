import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

function Dashboard() {
  const [timeframe, setTimeframe] = useState('monthly');
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (timeframe === 'daily') {
          data = [50, 100, 75, 80, 120, 90, 100]; // Replace with your actual daily data
        } else if (timeframe === 'weekly') {
          data = [200, 250, 300, 280, 350, 320, 300]; // Replace with your actual weekly data
        } else if (timeframe === 'monthly') {
          data = [500, 600, 550, 650, 700, 600, 650]; // Replace with your actual monthly data
        }

        if (chartRef.current) {
          const chart = chartRef.current.getContext('2d');
          if (chart) {
            new Chart(chart, {
              type: 'line',
              data: {
                labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7'],
                datasets: [
                  {
                    label: 'Data',
                    data: data,
                    backgroundColor: 'rgba(0, 123, 255, 0.5)',
                    borderColor: 'rgba(0, 123, 255, 1)',
                    borderWidth: 1,
                  },
                ],
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              },
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [timeframe]);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <canvas ref={chartRef} style={{ height: '400px', width: '600px' }}></canvas>
      <div>
        <button onClick={() => setTimeframe('daily')}>Daily</button>
        <button onClick={() => setTimeframe('weekly')}>Weekly</button>
        <button onClick={() => setTimeframe('monthly')}>Monthly</button>
      </div>
    </div>
  );
}

export default Dashboard;
import React, { useEffect, useState, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = () => {
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Series2', 'Series3', 'Series4'],
      datasets: [
        {
          data: [30, 20, 50],
          backgroundColor: ['#3c8dbc', '#0073b7', '#00c0ef'],
        },
      ],
    };

    setChartData(data);

    // Cleanup code
    return () => {
      // Destroy the chart instance when the component unmounts
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      setChartData(null);
    };
  }, []); // Run the effect only once on component mount

  const options = {
    cutoutPercentage: 50, // Equivalent to innerRadius: 0.5
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  };

  return (
    <div className="card card-primary card-outline">
      <div className="card-header">
        <h3 className="card-title">
          <i className="far fa-chart-bar"></i>
          Donut Chart
        </h3>
        <div className="card-tools">
          <button type="button" className="btn btn-tool" data-card-widget="collapse">
            <i className="fas fa-minus"></i>
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div className="card-body">
        {chartData && (
          <Doughnut
            ref={chartRef}
            data={chartData}
            options={options}
            key={Math.random()} // Force component re-render to create a new chart instance
          />
        )}
      </div>
    </div>
  );
};

export default DonutChart;

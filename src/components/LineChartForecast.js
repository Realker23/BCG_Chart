import React, {useEffect, useRef} from "react";
import Chart from "chart.js/auto";

const LineChartForecast = ({
  aiForecast,
  finalForecast,
  previousQuaterFinalForecast,
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: [
          "Q4 2024",
          "Q1 2025",
          "Q2 2025",
          "Q3 2025",
          "Q4 2025",
          "Q1 2026",
        ],
        datasets: [
          {
            label: "AI Forecast",
            data: aiForecast,
            fill: false,
            borderColor: "green",
            borderWidth: 2,
            borderDash: [5, 5],
          },
          {
            label: "Final Forecast",
            data: finalForecast,
            fill: false,
            borderColor: "yellow",
            borderWidth: 2,
            borderDash: [5, 5],
          },
          {
            label: "Previous Quarter Final Forecast",
            data: previousQuaterFinalForecast,
            fill: false,
            borderColor: "orange",
            borderWidth: 2,
            borderDash: [5, 5],
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "FORECAST",
          },
        },
        scales: {
          y: {
            suggestedMin: 0, // Set the minimum value for the y-axis
            suggestedMax: 1000,
            display: false,
          },
          x: {
            border: {
              display: true,
            },
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: true,
              color: "#383a3a",
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [aiForecast, finalForecast, previousQuaterFinalForecast]);

  return <canvas width={`640px`} ref={chartRef} />;
};

export default LineChartForecast;

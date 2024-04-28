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
          },
          {
            label: "Final Forecast",
            data: finalForecast,
            fill: false,
            borderColor: "yellow",
            borderWidth: 2,
          },
          {
            label: "Previous Quarter Final Forecast",
            data: previousQuaterFinalForecast,
            fill: false,
            borderColor: "orange",
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            display: false,
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

  return <canvas className="w-1/2" ref={chartRef} />;
};

export default LineChartForecast;

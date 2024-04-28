import React, {useEffect, useRef} from "react";
import Chart from "chart.js/auto";

const LineChartHistorical = ({aiForecast, finalForecast, consumption}) => {
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
          "Q2 2023",
          "Q3 2023",
          "Q4 2023",
          "Q1 2024",
          "Q2 2024",
          "Q3 2024",
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
            label: "CONSUMPTION",
            data: consumption,
            fill: false,
            borderColor: "orange",
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: "CONSUMPTION(FT, Thousand)",
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
  }, [aiForecast, finalForecast, consumption]);

  return <canvas className="w-1/2" ref={chartRef} />;
};

export default LineChartHistorical;

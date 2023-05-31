import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./chart.css";
function Chart({ coinHistory, currentPrice, coinName }) {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }
  const chartData = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#003049",
        borderColor: "#0096c7",
      },
    ],
  };
  console.log(ChartJS);
  return (
    <div className="chart-container">
      <div className="content">
        <h3>{coinName} Price Chart</h3>
        <p>
          <span>{coinHistory?.data?.change}%</span>
          <span>
            {coinName} Price: $ {currentPrice}
          </span>
        </p>
      </div>
      <div className="chart-line">
        <Line data={chartData} />
      </div>
    </div>
  );
}

export default Chart;

import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import moment from "moment";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function HistoryChart() {
  const { id } = useParams();
  const { response } = useAxios(`http://localhost:3000/api/coins`);
  const [coinChartData, setCoinChartData] = useState([]);

  useEffect(() => {
    if (response) {
      const selectedCoinData = response.find((coin) => coin.coinId === id);

      if (selectedCoinData) {
        const chartData = selectedCoinData.marketChartData.prices.map((value) => ({
          x: value[0],
          y: value[1].toFixed(2),
        }));

        setCoinChartData(chartData);
      }
    }
  }, [response, id]);

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'category', // "category" ölçeğini kullan
        labels: coinChartData.map((value) =>
          moment(value.x).format("MMMM Do YYYY, h:mm:ss a")
        ),
      },
      y: {
        type: 'linear', // ya da uygun bir y ölçeği seç
      },
    },
  };

  const data = {
    labels: coinChartData.map((value) =>
      moment(value.x).format("MMMM Do YYYY, h:mm:ss a")
    ),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinChartData.map((value) => value.y),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  if (!response) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-[80%]">
      <Line className="" options={options} data={data} />
    </div>
  );
}

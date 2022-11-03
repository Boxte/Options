import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineGraph = (props) => {
  const title = "Long Call";

  const moneyData = [-50, -50, 0, 50, 100];
  const datasetOptions = {
    pointRadius: [...Array(moneyData.length - 1).fill(0), 10],
    pointStyle: [...Array(moneyData.length - 1).fill(""), "triangle"],
    rotation: [...Array(moneyData.length - 1).fill(0), 45],
  };

  const data = {
    labels: ["", "", "Breakeven", "", ""],
    datasets: [
      {
        data: moneyData,
        fill: {
          target: {
            value: 0,
          },
          below: "rgba(196, 77, 86, 0.9)",
          above: "rgba(50,205,50,0.7)",
        },
        ...datasetOptions,
      },
    ],
  };

  const chartOptions = {
    scales: {
      yAxis: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <div>
      <Line options={chartOptions} data={data}></Line>
    </div>
  );
};

export default LineGraph;

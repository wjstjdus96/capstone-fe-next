import "chart.js/auto";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ITimes {
  date: string;
  count: number;
}

interface ILineChart {
  times: ITimes[];
}

export default function LineChart({ times }: ILineChart) {
  const x = times.map((time: ITimes) => time.date);
  const y = times.map((time: ITimes) => time.count);

  const data = {
    labels: x,
    datasets: [
      {
        label: "등록 댓글 개수 ",
        data: y,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return <Line data={data} height={300} width={"100%"} options={options} />;
}

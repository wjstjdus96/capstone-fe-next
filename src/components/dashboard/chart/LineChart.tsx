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
import { ITimes } from "@/types/data";
import { ILineChart } from "@/types/components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ times }: ILineChart) {
  const x = times.map((time: ITimes) => time.date);
  const y = times.map((time: ITimes) => time.count);

  const data = {
    labels: x,
    datasets: [
      {
        label: "등록 댓글 개수 ",
        data: y,
        borderColor: "#4e73df",
        backgroundColor: "#2e59d9",
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

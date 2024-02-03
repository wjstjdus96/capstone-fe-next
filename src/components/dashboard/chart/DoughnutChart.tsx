import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
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
import { IDoughnutChart } from "@/types/components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DoughnutChart({ percent }: IDoughnutChart) {
  const data = {
    backgroudColor: ["rgba(78, 115, 223, 0.05)", "rgba(78, 115, 223, 1)"],
    labels: ["긍정", "부정"],
    datasets: [
      {
        data: [100 - percent, percent],
        backgroundColor: ["#D83636", "#FCBF49"],
        borderColor: "#F7F7F7",
        hoverBorderColor: "#3A4458",
      },
    ],
    plugins: {
      tooltip: { titleFontColor: "white" },
    },
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return <Doughnut data={data} width={250} height={250} options={options} />;
}

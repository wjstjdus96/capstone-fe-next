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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface IDoughnutChart {
  percent: number;
}

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
    // plugins: {
    //   datalabels: {
    //     enabled: false,
    //     color: "black",
    //     anchor: "end",
    //     clamp: true,
    //     clip: true,
    //     align: "-135",
    //     offset: 1,
    //     formatter: function (value: any, context: any) {
    //       let result = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //       return result + "원";
    //     },
    //   },
    //   tooltip: {
    //     enabled: true,
    //     intersect: false,
    //     callbacks: {
    //       label: function (context: any) {
    //         let label = data.labels[context.datasetIndex];
    //         return label + ",  " + context.parsed.x + ",  " + context.parsed.y;
    //       },
    //     },
    //   },
    // },
  };

  return <Doughnut data={data} width={250} height={250} options={options} />;
}

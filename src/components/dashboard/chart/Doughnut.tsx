import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

interface IDoughnutChart {
  percent: number;
}

export default function DoughnutChart({ percent }: IDoughnutChart) {
  const data = {
    backgroudColor: ["rgba(78, 115, 223, 0.05)", "rgba(78, 115, 223, 1)"],
    labels: ["부정", "긍정"],
    datasets: [
      {
        data: [100 - percent, percent],
        backgroundColor: ["#00CCFF", "#4e73df"],
        hoverBackgroundColor: ["#03718d", "#2e59d9"],
        hoverBorderColor: "rgba(234, 236, 1)",
      },
    ],
  };

  //   const options = {
  //     maintainAspectRatio: false,
  //     tooltips: {
  //       backgroundColor: "rgb(255,255,255)",
  //       bodyFontColor: "#858796",
  //       borderColor: "#dddfeb",
  //       borderWidth: 1,
  //       xPadding: 15,
  //       yPadding: 30,
  //       displayColors: false,
  //       caretPadding: 10,
  //     },
  //     legend: {
  //       display: false,
  //     },
  //     cutoutPercentage: 80,
  //   };

  return (
    <Doughnut
      data={data}
      width={250}
      height={250}
      options={{ maintainAspectRatio: false }}
    />
  );
}

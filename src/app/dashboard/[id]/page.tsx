import DashBoardBody from "@/components/dashboard/dashboardBody/DashBoardBody";
import DashBoardHead from "@/components/dashboard/dashboardHead/DashBoardHead";

export default function DashBoard() {
  return (
    <main className="font-notoKR">
      <DashBoardHead />
      <DashBoardBody />
    </main>
  );
}

"use client";

import Header from "@/components/Header";
import DashBoardBody from "@/components/dashboard/DashBoardBody";
import DashBoardHead from "@/components/dashboard/DashBoardHead";

export default function DashBoard() {
  return (
    <div className="font-notoKR">
      <Header isVisible={false} />
      <DashBoardHead />
      <DashBoardBody />
    </div>
  );
}

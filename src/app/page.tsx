import About from "@/components/mainPage/About";
import Description from "@/components/mainPage/Description";
import Enter from "@/components/mainPage/Enter";
import Intro from "@/components/mainPage/Intro";

export default function Home() {
  return (
    <div className="h-full pt-[50px] font-notoKR">
      <Intro />
      <About />
      <Enter />
      <Description />
    </div>
  );
}

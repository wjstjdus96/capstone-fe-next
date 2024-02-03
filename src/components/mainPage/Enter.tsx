import { analysis_data } from "@/const/data";
import ExampleBtn from "../ExampleBtn";

export default function Enter({
  enterRef,
}: {
  enterRef: React.ForwardedRef<HTMLDivElement>;
}) {
  return (
    <div
      ref={enterRef}
      className="h-[70vh]  pt-[50px] bg-[#D83636] p-[2rem] text-white"
    >
      <div className="text-5xl font-bold">분석해보세요!</div>
      <div className="my-[4rem] flex flex-col justify-center items-center gap-[2rem] ">
        <h2 className="text-3xl">영상의 URL을 입력해주세요</h2>
        <input
          type="search"
          id="search"
          className="block w-[45vw] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-slate-500 focus:border-slate-500"
          placeholder="분석하고 싶은 유튜브 영상 url을 입력하세요"
          required
        />
      </div>
      <div
        data-aos="zoom-out-up"
        className="flex flex-col justify-center items-center gap-[1.5rem]"
      >
        <h4 className="text-[#F2E8C6] text-lg">
          # 현재 프론트엔드만 구현된 상태로 결과물은 예시를 통해서 확인해주세요
        </h4>
        <ul className="flex gap-[1rem]">
          {analysis_data.map((item, idx) => (
            <ExampleBtn key={idx} data={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

import ExampleBtn from "@/components/ExampleBtn";
import { tmpData } from "@/const/data";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  return (
    <div className="h-full px-40 pt-40 bg-gradient-to-b from-slate-500 to-white-500">
      <div className="flex flex-col items-center mb-20">
        <h1 className="text-5xl text-slate-50 font-bold mb-5">TubeAna</h1>
        <h4 className="text-3xl text-slate-50 font-bold mb-16">
          ( Youtube + Analysis )
        </h4>
        <form className="w-1/2">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FiSearch />
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-slate-500 focus:border-slate-500"
              placeholder="분석하고 싶은 유튜브 영상 url을 입력하세요"
              required
            ></input>
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              분석하기
            </button>
          </div>
        </form>
      </div>
      <div className="mx-40 flex justify-evenly">
        {tmpData.map((item, idx) => (
          <ExampleBtn key={idx} data={item} />
        ))}
      </div>
    </div>
  );
}

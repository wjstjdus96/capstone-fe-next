import ExampleBtn from "@/components/ExampleBtn";
import { tmpData } from "@/const/data";

export default function Home() {
  return (
    <div className="h-full px-40 pt-40 bg-gradient-to-b from-red-500 to-white-500">
      <div className="flex flex-col items-center mb-20">
        <h1 className="text-5xl text-slate-50 font-bold mb-20">
          Tubeana ( Youtube + analysis )
        </h1>
        <form className="w-5/6">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 20 20"
              ></svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="분석하고 싶은 유튜브 영상 url을 입력하세요"
              required
            ></input>
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              분석하기
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-evenly">
        {tmpData.map((item) => (
          <ExampleBtn data={item} />
        ))}
      </div>
    </div>
  );
}

import { ILikesTable } from "@/types/components";
import { AiOutlineLike } from "react-icons/ai";

export default function LikesTable({ most_likes }: ILikesTable) {
  return (
    <div className="h-[300px] overflow-x-hidden rounded-3xl">
      <table className="w-full text-sm text-left text-gray-500">
        <tbody>
          {most_likes.map((item, idx) => (
            <tr className="bg-white border-b" key={idx}>
              <td className="px-6 py-5 flex flex-col gap-[0.3rem] justify-center items-center font-medium text-xs text-gray-900 font-medium">
                <AiOutlineLike />
                {item.count}
              </td>
              <td className="pr-6 py-5 text-sm leading-6">{item.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

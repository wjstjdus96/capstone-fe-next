import { ILikesTable } from "@/types/components";
import { AiOutlineLike } from "react-icons/ai";

export default function LikesTable({ most_likes }: ILikesTable) {
  return (
    <div className="h-[300px] overflow-x-hidden">
      <table className="w-full text-sm text-left text-gray-500">
        <tbody>
          {most_likes.map((item, idx) => (
            <tr className="bg-white border-b" key={idx}>
              <td className="px-6 py-3 flex gap-x-1 justify-center items-center font-medium text-gray-900">
                <AiOutlineLike />
                {item.count}
              </td>
              <td className="px-6 py-3">{item.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

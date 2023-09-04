import { useEffect, useState } from "react";

interface ICommentChart {
  top_comments: string[];
  low_comments: string[];
}

export default function CommentChart({
  top_comments,
  low_comments,
}: ICommentChart) {
  const [isPositive, setIsPositive] = useState(true);
  const [clickedComments, setClickedComments] = useState(top_comments);

  const changeIsPositive = (e: React.MouseEvent) => {
    setIsPositive((prev) => !prev);
  };

  useEffect(() => {
    setClickedComments(() => {
      return isPositive ? top_comments : low_comments;
    });
  }, [isPositive]);

  return (
    <div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className=" text-gray-700 bg-gray-50">
          <tr className="border-b border-slate-300">
            <th className="px-2 py-3">
              <button
                data-dropdown-toggle="dropdownRadio"
                className="inline-flex items-center text-gray-500 text-xs bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5"
                onClick={changeIsPositive}
              >
                {isPositive ? "긍정" : "부정"}
              </button>
            </th>
            <th className="px-6 py-3">내용</th>
          </tr>
        </thead>
        <tbody>
          {clickedComments.map((comment, idx) => (
            <tr className="bg-white border-b" key={idx}>
              <td className="px-6 py-3 font-medium text-gray-900">{idx + 1}</td>
              <td className="px-6 py-3">{comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface ICommentChartToggleBtn {
  isPositive: boolean;
  handleIsPositive: () => void;
}

const di = {
  default: "before:flex before:absolute before:[]",
  positiveAfter: "",
  positiveBefor: "",
  negativeAfter: "",
  negativeBefore: "",
};

export default function CommentChartToggleBtn({
  isPositive,
  handleIsPositive,
}: ICommentChartToggleBtn) {
  return (
    <label
      htmlFor="toggleBtn"
      className="inline-flex items-center gap-[0.5rem] cursor-pointer text-[0.8rem] "
    >
      <span>긍정</span>
      <span className="relative">
        <input
          id="toggleBtn"
          type="checkbox"
          className="hidden peer"
          onClick={handleIsPositive}
        />
        <div className="w-[2rem] h-[1rem] rounded-full shadow-inner bg-[#D83636] peer-checked:bg-[#FCBF49]"></div>
        <div className="absolute inset-y-0 left-0 w-2 h-2 m-1 rounded-full shadow bg-white peer-checked:right-0 peer-checked:left-auto"></div>
      </span>
      <span className="m-0">부정</span>
    </label>
  );
}

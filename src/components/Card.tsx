interface ICard {
  title: string;
  children: React.ReactNode;
  basis?: number;
}

interface IFlexRow {
  [key: number]: string;
}

const flexRow: IFlexRow = {
  0: "h-auto w-auto",
  0.2: "h-auto w-auto basis-1/5 ",
  0.5: "h-auto w-auto basis-1/2 ",
  0.8: "h-auto w-auto basis-4/5 ",
};

export default function Card({ title, children, basis }: ICard) {
  return (
    <div className={flexRow[basis ? basis : 0]}>
      <div className="px-4 py-3 bg-[#F4DFC8] rounded-t-lg font-bold">
        {title}
      </div>
      <div className="p-5 bg-[#FAF6F0] rounded-b-lg ">{children} </div>
    </div>
  );
}

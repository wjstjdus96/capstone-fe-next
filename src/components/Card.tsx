interface ICard {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: ICard) {
  return (
    <div className="h-auto w-auto">
      <div className="px-4 py-3 bg-slate-200 rounded-t-lg font-bold">
        {title}
      </div>
      <div className="p-5 bg-slate-100 rounded-b-lg">{children} </div>
    </div>
  );
}

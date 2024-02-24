export default function VideoItem({ item, idx }: { item: any; idx: number }) {
  return (
    <li className="group w-3/4">
      <div className="flex gap-[1rem] py-[1rem] px-[2rem] relative bg-white rounded-3xl group-hover:scale-105 group-hover:border-solid transition-all">
        <h1>#{idx}</h1>
        <h2>{item.title}</h2>
      </div>
      <div className="flex gap-[1rem] p-[1rem] h-0 opacity-0 group-hover:h-[120px] group-hover:opacity-100 transition-all">
        <img
          src={item.thumbnails.medium.url}
          className="w-[160px] object-cover"
        />
        <div className="flex flex-col justify-around">
          <div className="flex">
            <p>channel. {item.channelTitle}</p>
            <p>{item.publishedAt.slice(0, 10)}</p>
          </div>
          <div className="flex gap-[0.3rem] overflow-hidden">
            {item.tags?.slice(0, 10).map((tag: string) => (
              <p>#{tag}</p>
            ))}
          </div>
          <h2 className=" opacity-0 group-hover:opacity-100 transition-all">
            분석하기
          </h2>
        </div>
      </div>
    </li>
  );
}

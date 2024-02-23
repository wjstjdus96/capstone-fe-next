export default function VideoItem({ item, idx }: { item: any; idx: number }) {
  return (
    <li className="group">
      <div className="flex gap-[1rem] py-[1rem] px-[2rem] bg-white rounded-3xl">
        <h1>#{idx}</h1>
        <h2>{item.title}</h2>
      </div>
      <div className="flex gap-[1rem] p-[1rem] h-0 opacity-0 group-hover:animate-videoListDetail">
        <img
          src={item.thumbnails.medium.url}
          className="w-[160px] object-cover"
        />
        <div>
          <div className="flex">
            <p>channel. {item.channelTitle}</p>
            <p>{item.publishedAt.slice(0, 10)}</p>
          </div>
          <div className="flex gap-[0.3rem] flex-wrap">
            {item.tags?.slice(0, 10).map((tag: string) => (
              <p>#{tag}</p>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

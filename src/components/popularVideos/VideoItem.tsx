export default function VideoItem({ item, idx }: { item: any; idx: number }) {
  console.log(item);
  return (
    <li className="py-[0.5rem] w-3/5">
      <div className="flex gap-[1rem] py-[1rem] px-[2rem] bg-white rounded-3xl">
        <h1>#{idx}</h1>
        <h2>{item.title}</h2>
      </div>
      {/* <div className="flex gap-[1rem] p-[1rem]">
        <img
          src={item.thumbnails.medium.url}
          className="w-[160px] object-cover"
        />
        <div>
          <div>{item.title}</div>
          <div></div>
        </div>
      </div> */}
    </li>
  );
}

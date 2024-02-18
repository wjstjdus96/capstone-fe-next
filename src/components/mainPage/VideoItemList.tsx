const fetchVideos = async () => {
  const res = await fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=AIzaSyC6yTlfN6VPRPV9VYV9C_VVwQLDvK78sUg",
    {
      method: "GET",
    }
  );
  return res.json();
};

export default async function VideoItemList() {
  const data = await fetchVideos();
  console.log(data.items);

  return (
    <ul>
      {data.items.map((item: any) => (
        <li></li>
      ))}
    </ul>
  );
}

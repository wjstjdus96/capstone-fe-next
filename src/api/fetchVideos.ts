export const fetchVideos = async () => {
  const res = await fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=KR&key=AIzaSyC6yTlfN6VPRPV9VYV9C_VVwQLDvK78sUg",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("데이터 패칭 실패");
  }

  return res.json();
};

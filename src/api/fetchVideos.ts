export const dynamic = "force-dynamic";

export const fetchVideos = async () => {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=KR&key=${process.env.YOUTUBE_API_KEY}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("데이터 패칭 실패");
  }

  return res.json();
};

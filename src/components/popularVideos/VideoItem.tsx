import styles from "../../styles/popularMovies.module.scss";

export default function VideoItem({ item, idx }: { item: any; idx: number }) {
  return (
    <li className={styles.videoItemWrapper}>
      <div className={styles.videoItemDefault}>
        <h1>#{idx}</h1>
        <h2>{item.title}</h2>
        <button>분석하기</button>
      </div>
      <div className={styles.videoItemExpanded}>
        <img src={item.thumbnails.medium.url} />
        <div className={styles.videoItemDetailWrapper}>
          <p>{item.channelTitle}</p>
          <p>{item.publishedAt.slice(0, 10)}</p>
          <div>
            {item.tags?.slice(0, 6).map((tag: string, idx: number) => (
              <p key={idx}>
                <span>#</span> &nbsp;
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

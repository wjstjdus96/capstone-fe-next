import styles from "../../styles/popularMovies.module.scss";

export default function VideoItem({ item, idx }: { item: any; idx: number }) {
  return (
    <li className={styles.videoItemWrapper}>
      <div className={styles.videoItemDefault}>
        <h1>#{idx}</h1>
        <h2>{item.title}</h2>
      </div>
      <div className={styles.videoItemExpanded}>
        <img src={item.thumbnails.medium.url} />
        <div className={styles.videoItemDetailWrapper}>
          <div>
            <p>channel. {item.channelTitle}</p>
            <p>{item.publishedAt.slice(0, 10)}</p>
          </div>
          <div>
            {item.tags?.slice(0, 10).map((tag: string) => (
              <p>#{tag}</p>
            ))}
          </div>
          <p>분석하기</p>
        </div>
      </div>
    </li>
  );
}

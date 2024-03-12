import styles from "../../styles/popularMovies.module.scss";

export default function VideoItem({ item, idx }: { item: any; idx: number }) {
  return (
    <li className={styles.videoItemWrapper}>
      <article className={styles.videoItemDefault}>
        <h4>#{idx}</h4>
        <h6>{item.title}</h6>
        <button>분석하기</button>
      </article>
      <article className={styles.videoItemExpanded}>
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
      </article>
    </li>
  );
}

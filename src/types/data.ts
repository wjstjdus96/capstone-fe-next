export interface IAnalysisData {
  videoId: string;
  title: string;
  thumbnail: string;
  percent: number;
  top5_text: string[];
  low5_text: string[];
  keyword: string[];
  most_likes: ILikes[];
  relation_video: IRelationVideo[];
  time: ITimes[];
}

interface IRelationVideo {
  id: string;
  thumbnail: string;
  title: string;
}

interface ILikes {
  count: number;
  text: string;
}

export interface ITimes {
  date: string;
  count: number;
}

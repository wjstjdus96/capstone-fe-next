import { IAnalysisData, ILikes, ITimes } from "./data";

export interface IExampleBtn {
  data: IAnalysisData;
}

export interface IDataProvider {
  children: React.ReactNode;
}

export interface ILineChart {
  times: ITimes[];
}

export interface ILikesTable {
  most_likes: ILikes[];
}

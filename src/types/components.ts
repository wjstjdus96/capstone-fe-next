import { StaticImageData } from "next/image";
import { IAnalysisData, ILikes, IRelationVideo, ITimes } from "./data";

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

export interface IRelatedSlider {
  related: IRelationVideo[];
}

export interface ICommentChart {
  top_comments: string[];
  low_comments: string[];
}

export interface ICommentChartToggleBtn {
  isPositive: boolean;
  handleIsPositive: () => void;
}

export interface IDoughnutChart {
  percent: number;
}

export interface IWordCloud {
  keywords: string[];
}

export interface IDescription {
  name: string;
  sub: string;
  image: StaticImageData;
}

export interface ICard {
  title: string;
  children: React.ReactNode;
  basis?: number;
}

export interface IFlexRow {
  [key: number]: string;
}

export interface IHeader {
  onClickAbout?: () => void;
  onClickEnter?: () => void;
  onClickDescription?: () => void;
}

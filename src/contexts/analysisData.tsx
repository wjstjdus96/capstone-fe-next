"use client";

import { IDataProvider } from "@/types/components";
import { IAnalysisData } from "@/types/data";
import { createContext, useContext, useState } from "react";

interface IDataContext {
  analysisData: IAnalysisData;
  setAnalysisData: (i: any) => void;
}

const initialDataContext: IDataContext = {
  analysisData: {
    videoId: "",
    title: "",
    thumbnail: "",
    percent: 0,
    top5_text: [],
    low5_text: [],
    keyword: [],
    most_likes: [],
    relation_video: [],
    time: [],
    profileImg: "",
    profileName: "",
    views: "",
    uploadTime: "",
  },
  setAnalysisData: (i: any) => {},
};

const DataContext = createContext<IDataContext>(initialDataContext);

export function DataContextProvider({ children }: IDataProvider) {
  const [analysisData, setAnalysisData] = useState({
    videoId: "",
    title: "",
    thumbnail: "",
    percent: 0,
    top5_text: [],
    low5_text: [],
    keyword: [],
    most_likes: [],
    relation_video: [],
    time: [],
    profileImg: "",
    profileName: "",
    views: "",
    uploadTime: "",
  });

  return (
    <DataContext.Provider value={{ analysisData, setAnalysisData }}>
      {children}
    </DataContext.Provider>
  );
}

export const useAnalysisData = () => useContext(DataContext);

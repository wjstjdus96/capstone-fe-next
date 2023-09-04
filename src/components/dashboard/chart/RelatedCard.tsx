import { IRelatedSlider } from "@/types/components";
import { IRelationVideo } from "@/types/data";

export default function RelatedCard({ id, thumbnail, title }: IRelationVideo) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[240px] h-[134px] mb-8 overflow-hidden rounded-lg">
        <img className="w-full h-full object-cover" src={thumbnail} />
      </div>
      <div>{title}</div>
      <div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-2.5 py-2 mr-2 my-3">
          분석 결과 보기
        </button>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-2.5 py-2 mr-2 my-3">
          영상 보러 가기
        </button>
      </div>
    </div>
  );
}

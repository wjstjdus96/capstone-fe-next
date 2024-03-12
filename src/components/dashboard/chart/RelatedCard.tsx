import { IRelatedSlider } from "@/types/components";
import { IRelationVideo } from "@/types/data";

export default function RelatedCard({ id, thumbnail, title }: IRelationVideo) {
  return (
    <div className="flex flex-col items-center">
      <figure className="w-[240px] h-[134px] mb-8 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover"
          src={thumbnail}
          alt={`${title} 영상 썸네일`}
        />
      </figure>
      <p className="text-sm mb-[1rem] px-[1rem]">{title}</p>
      <div className="text-xs">
        <button className="text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:ring-slate-200  rounded-lg px-2.5 py-2 mr-2 my-3">
          분석 결과 보기
        </button>
        <button className="text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:ring-slate-200 rounded-lg  px-2.5 py-2 mr-2 my-3">
          영상 보러 가기
        </button>
      </div>
    </div>
  );
}

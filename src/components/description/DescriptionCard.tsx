import { IDescription } from "@/types/components";
import Image from "next/image";

export default function DescriptionCard({
  description,
  idx,
}: {
  description: IDescription;
  idx: number;
}) {
  return (
    <div className="group perspective-1000 py-[2.5rem] px-[1rem] mx-[0.5rem]">
      <div className="group-hover:rotate-y-[-180deg] duration-500 h-[16rem] relative transform-style-3d rotate-y-0">
        <div className="backface-hidden bg-white absolute flex flex-col gap-[2rem] justify-center items-center h-full w-full rounded-3xl">
          <h2 className="text-xl font-bold text-[#1D809F]">
            {description.name}
          </h2>
          <Image
            src={description.image}
            alt={description.name}
            width={90}
            height={90}
          />
        </div>
        <div className="backface-hidden absolute rotate-y-180 bg-[#8EBFCF] h-full rounded-3xl flex justify-center items-center">
          <div className="text-md px-[1.5rem]">{description.sub}</div>
        </div>
      </div>
    </div>
  );
}

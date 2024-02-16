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
    <div
      data-aos="zoom-in"
      data-aos-delay={`${idx * 100}`}
      data-aos-easing="linear"
      className="h-[22rem] bg-white text-black rounded-3xl p-[2.5rem]  "
    >
      <div className="mb-[2.5rem] text-center text-2xl font-bold text-[#1D809F]">
        {description.name}
      </div>
      <div className="flex flex-col gap-[2rem] justify-center items-center">
        <Image
          src={description.image}
          alt={description.name}
          width={120}
          height={120}
        />
        <div className=" text-sm">{description.sub}</div>
      </div>
    </div>
  );
}
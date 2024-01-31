import Image, { StaticImageData } from "next/image";

interface IDescription {
  name: string;
  sub: string;
  image: StaticImageData;
}

export default function DescriptionCard({
  description,
}: {
  description: IDescription;
}) {
  return (
    <div className="h-[22rem] bg-white text-black rounded-3xl p-[2.5rem]  ">
      <div className="mb-[2rem] text-center text-3xl font-bold text-[#1D809F]">
        {description.name}
      </div>
      <div className="flex flex-col gap-[2rem] justify-center items-center">
        <Image
          src={description.image}
          alt={description.name}
          width={120}
          height={120}
        />
        <div className=" text-lg">{description.sub}</div>
      </div>
    </div>
  );
}

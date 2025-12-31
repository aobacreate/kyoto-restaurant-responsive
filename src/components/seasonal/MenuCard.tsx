import Image from "next/image";

type Props = {
  src: string;
  name: string;
  price: string;
};

export default function MenuCard({ src, name, price }: Props) {
  return (
    <div className="w-full max-w-[393px] md:max-w-[600px] mx-auto flex flex-col gap-3">
      {/* 写真 */}
      <div className="relative aspect-[393/320] md:aspect-[600/450] overflow-hidden">
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 393px) 100vw,
                 (max-width: 768px) 600px,  
          600px"
        />
      </div>

      {/* name / price */}
      <div className="px-4 flex justify-between items-center">
        <div>{name}</div>
        <div>¥ {price}</div>
      </div>
    </div>
  );
}

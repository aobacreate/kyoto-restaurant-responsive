import Image from "next/image";

type Props = {
  imageSrc: string;
  title: string;
};

export default function AboutCard({ imageSrc, title }: Props) {
  return (
      <div className="
        relative 
        w-[142px] md:w-[216px] lg:w-[320px] 
        aspect-square
        lg:aspect-auto
        lg:h-[270px] 
        overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
  );
}
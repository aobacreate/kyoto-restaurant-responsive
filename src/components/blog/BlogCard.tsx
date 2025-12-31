import Image from "next/image";

type Props = {
  title: string;
  date: string;
  description: string;
  imageSrc: string;
};

export default function BlogCard({ title, date, description, imageSrc }: Props) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[393px] md:w-[600px] flex flex-col">
        {/* 写真 + 日付 */}
        <div className="flex flex-col gap-2">
          <div className="relative h-[300px] md:h-[450px] overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="px-5 text-xs">
            {date}
          </div>
        </div>

        {/* テキストブロック */}
        <div className="mt-5 flex flex-col gap-5">
          <div className="px-5 text-xl font-bold">
            {title}
          </div>

          <div className="
            px-5 
            text-xs 
            whitespace-pre-line 
            leading-relaxed 
            max-w-[320px] md:max-w-[520px]
            ">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

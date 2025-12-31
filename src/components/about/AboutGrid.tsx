import AboutCard from "./AboutCard";
import { AboutItem } from "@/lib/about-data";


type Props = {
  items: AboutItem[];
};

export default function AboutGrid({items} : Props) {
  return (
    <div className="
      mt-10 md:mt-16
      max-w-[316px] md:max-w-[480px] 
      mx-auto 
      grid grid-cols-2 gap-x-2
      md:pl-4
    ">
      {items.map((item) => (
        <AboutCard
          key={item.id}
          title={item.title}
          imageSrc={item.imageSrc}
        />
      ))}
    </div>
  )
}
import LunchItemCard from "./LunchItemCard";

type Item = {
  id: string,
  title: string;
  price: number;
  imageSrc: string;
};

type Props = {
  items: Item[];
};

export default function LunchGrid({ items }: Props) {
  return (
    <div className="
      max-w-[316px] md:max-w-[480px] lg:max-w-[560px]
      mx-auto grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-10
      ">
      {items.map((item) => (
        <LunchItemCard
          key={item.id}
          title={item.title}
          price={item.price}
          imageSrc={item.imageSrc}
        />
      ))}
    </div>
  );
}

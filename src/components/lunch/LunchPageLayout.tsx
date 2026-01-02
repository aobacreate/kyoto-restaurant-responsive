import Header from "@/components/common/Header";
import MenuTitle from "@/components/menu/MenuTitle";
import Footer from "@/components/common/Footer";
import LunchGrid from "./LunchGrid";

type Item = {
  id: string;
  title: string;
  price: number;
  imageSrc: string;
};

type Props = {
  title: string;
  subtitle: string;
  items: Item[];
};

export default function LunchPageLayout({title, subtitle, items}: Props) {
  return (
    <>
      <Header title="Menu" />
      <main className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="mt-10 md:mt-16">
          <MenuTitle title={title} subtitle={subtitle} />
        </div>
        {/* menu */}
        <div className="mt-10 md:mt-16">
          <LunchGrid items={items} />
        </div>
      </main>
      {/* Footer */}
      <div className="mt-10 md:mt-16">
        <Footer showMap={false}/>
      </div>      
    </>
  );
}
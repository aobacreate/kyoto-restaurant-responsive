import Header from "@/components/common/Header";
import MenuTitle from "@/components/menu/MenuTitle";
import MenuCard from "@/components/seasonal/MenuCard";
import Footer from "@/components/common/Footer";

export default function Seasonal() {
  return (
    <>
      <Header title="Menu" />
      <main className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="mt-10 md:mt-16">
          <MenuTitle title="季節限定" subtitle="旬の食材を使った献立"/>
        </div>
        <div className="mt-6 flex flex-col gap-10 md:gap-16">
          <MenuCard src="/images/seasonal/hero.webp" name="秋の京懐石" price="3000" />
          <MenuCard src="/images/seasonal/seasonal.webp" name="彩御膳" price="3000" />
        </div>
      </main>
      {/* Footer */}
      <div className="mt-10 md:mt-16">
        <Footer showMap={false}/>
      </div>      
    </>
  );
}



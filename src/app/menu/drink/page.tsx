import { drinkItems } from "@/lib/menu-data";
import Header from "@/components/common/Header";
import MenuTitle from "@/components/menu/MenuTitle";
import Footer from "@/components/common/Footer";
import DrinkSection from "@/components/drink/DrinkSection";

export default function Drink() {
  return (
    <>
      <Header title="Menu" />
      <main className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="mt-10 md:mt-16">
          <MenuTitle title="ドリンク" subtitle="日本酒・お飲み物" />
        </div>
        {/* menu */}
        <div className="mt-10 md:mt-16">
          <DrinkSection items={drinkItems} />
        </div>
      </main>
      {/* Footer */}
      <div className="mt-10 md:mt-16">
        <Footer showMap={false}/>
      </div>      
    </>
  );
}

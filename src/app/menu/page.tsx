import Image from "next/image";
import Header from "@/components/common/Header";
import NavButton from "@/components/common/NavButton";
import MenuButtons from "@/components/menu/MenuButtons";
import Footer from "@/components/common/Footer";

export default function Menu() {
  return (
    <>
      <Header title="Menu" />
      <main className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="mt-6">
          <NavButton href="/menu/seasonal" title="季節限定" subtitle="旬の食材を使った献立"/>
        </div>
        {/* 写真セクション */}
        <div className="
          relative w-full 
          max-w-[393px] md:max-w-[600px]
          h-[300px] md:h-[450px]
          overflow-hidden mx-auto
          mt-4 md:mt-6
          ">
          <Image
            src="/images/seasonal/hero.webp"
            alt="京料理"
            fill
            className="object-cover object-center"
            sizes="
            (max-width: 393px) 100vw,
            (max-width: 768px) 600px, 
            600px"
            priority
          />
        </div>
        {/* MenuButtons セクション*/}
        <div className="mt-10">
          <MenuButtons />
        </div>
      </main>
      {/* Footer */}
      <div className="mt-10">
        <Footer showMap={false}/>
      </div>      
    </>
  );
}


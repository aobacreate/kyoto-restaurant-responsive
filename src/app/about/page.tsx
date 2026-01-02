import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AboutGrid from "@/components/about/AboutGrid";
import AboutText from "@/components/about/AboutText";
import { aboutItems } from "@/lib/about-data";

export default function About() {
  return (
    <>
      <Header title="Menu" />
      <main className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        {/* text */}
        <AboutText />
        {/* images */}
        <AboutGrid items={aboutItems} />
      </main>
      {/* Footer */}
      <div className="mt-10 md:mt-16">
        <Footer showMap={false}/>
      </div>      
    </>
  );
}












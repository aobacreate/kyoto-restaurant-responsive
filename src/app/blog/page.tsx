
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { blogItems } from "@/lib/blog-data";

export default function Blog() {
  return (
    <>
      <Header title="Blog" />
      <main className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        {/* blog list */}
        <div className="mt-10 md:mt-16 flex flex-col gap-10 md:gap-16">
          {blogItems.map((item) => (
            <BlogCard
              key={item.id}
              title={item.title}
              date={item.date}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </main>
      {/* Footer */}
      <div className="mt-10 md:mt-16">
        <Footer showMap={false} />
      </div>
    </>
  );
}

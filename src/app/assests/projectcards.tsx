"use client";

import { Carousel } from "../component/ui/carousel";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Basic NextJs Component Base Portfolio",
      button: "Portfolio",
      src: "/images/portfolio.jpg",
      link: "https://component-based-portfolio-moazkhan.vercel.app/",
    },
    {
      title: "Resume Builder",
      button: "Resume Builder",
      src: "/images/resume.png",
      link: "https://milestone5-shearablelink-downloadpdf-moazkhan.vercel.app/",
    },
    {
      title: "Blog Website",
      button: "Meta Blog",
      src: "/images/blog.png",
      link: "https://metabolg-by-moazkhan.vercel.app/",
    },
    {
      title: "E-Commerce Website",
      button: "Trendify",
      src: "/images/ecommerce.jpg",
      link: "https://hackathonthree-ecommer-site.vercel.app/",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <h1 className="text-4xl font-extrabold text-center p-2 underline underline-offset-2">Projects</h1>
      <Carousel slides={slideData} />
    </div>
  );
}

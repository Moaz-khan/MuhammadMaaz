import React from "react";
import Image from "next/image";
import { StickyScroll } from "../component/ui/sticky-scroll-reveal";
const content = [
  {
    title: "Who Am I?",
    description:
      "My name is Muhammad Maaz, and I am a Full-Stack Web Developer & UI/UX Designer. I specialize in building modern, high-performance web applications with a strong focus on user experience, scalability, and clean design.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-slate-800 font-extrabold">
        Who Am I?
      </div>
    ),
  },
  {
    title: "🎓 Education & Learning Journey",
    description:
      "I completed my Intermediate in Commerce from the Karachi Intermediate Board. Currently, I am pursuing a Metaverse & Web 3.0 course at GIAIC, where I have learned HTML, CSS, JavaScript, TypeScript, and Next.js. Throughout my learning journey, I have worked on various projects that have strengthened my skills in web development and UI/UX design. I am always eager to explore new technologies and enhance my expertise.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-slate-800">
        <Image
          src="/images/education.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Education"
        />
      </div>
    ),
  },
  {
    title: "🚀 My Vision",
    description:
      "My goal is to develop scalable, high-performance, and innovative web applications that solve real-world problems. I aim to go beyond just coding and understand product design, user behavior, and business strategies to create impactful solutions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-slate-800">
        <Image
          src="/images/vision.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Vision"
        />
      </div>
    ),
  },
  {
    title: "🎯 Future Goals",
    description:
      "I aspire to develop SaaS products that help businesses automate workflows, work on AI-driven applications to enhance web experiences, contribute to open-source projects to share my knowledge with the tech community, and ultimately transition into entrepreneurship to launch my own innovative company.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-slate-800">
        <Image
          src="/images/future.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Vision"
        />
      </div>
    ),
  },
];
function Aboutme() {
  return (
    <div id="aboutme" className="flex justify-center items-center px-6 lg:px-0">
      <div className="w-full max-w-[1200px] h-auto lg:h-[500px] bg-orange-50 flex flex-col-reverse lg:flex-row justify-between items-center rounded-2xl mt-20 lg:mt-32 mb-4 p-6 lg:p-10 shadow-xl">
        <div className="flex flex-col items-center">
          <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full shadow-inner shadow-orange-300 overflow-hidden">
            <Image
              src={"/images/hero2.png"}
              alt="Muhammad Maaz"
              width={450}
              height={450}
              className="absolute -top-10 md:-top-16 lg:-top-20 object-cover drop-shadow-2xl"
            />
          </div>
        </div>
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-black dark:text-white font-extrabold text-4xl text-center">
            About Me
          </h1>
          <StickyScroll content={content} />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;

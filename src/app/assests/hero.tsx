import Image from "next/image";
import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { TextGenerateEffect } from "../component/ui/text-generate-effect";
import { FlipWordsDemo } from "./flipword";

const words = `I am a passionate web developer skilled in HTML, CSS, JavaScript,
TypeScript, Next.js, and Tailwind CSS. My focus is on building fast,
modern, and user-friendly websites and web apps, prioritizing clean
code, performance, and great UI/UX. Bringing innovation and
creativity to every project is my identity, and I constantly strive
to learn new technologies and improve my skills.`;

function Hero() {
  return (
    <div id="home" className="flex justify-center items-center px-6 lg:px-0">
      <div className="w-full max-w-[1200px] h-auto lg:h-[500px] bg-orange-50 flex flex-col-reverse lg:flex-row justify-between items-center rounded-2xl mt-20 lg:mt-32 mb-4 p-6 lg:p-10 shadow-xl">
        {/* Writing Section */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <p className="text-[20px] md:text-[24px]">Hi, I am</p>
          <p className="font-semibold text-[28px] md:text-[32px] text-orange-500 animate-bounce">
            Muhammad Maaz
          </p>
          <FlipWordsDemo />
          <TextGenerateEffect
            duration={1}
            filter={true}
            words={words}
            className="mb-4 text-sm md:text-base"
          />
          <button className="bg-orange-500 font-semibold w-[160px] md:w-[188px] h-[48px] md:h-[52px] rounded-lg mt-4 hover:bg-orange-400 duration-300 text-orange-50 shadow-lg shadow-black/50 hover:scale-105">
            Hire Me
          </button>
        </div>

        {/* Image Section */}
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
          <div className="flex justify-center items-center mt-4 gap-4">
            <FaFacebook className="text-2xl md:text-3xl hover:text-orange-400 duration-200 cursor-pointer hover:scale-110" />
            <FaLinkedin className="text-2xl md:text-3xl hover:text-orange-400 duration-200 cursor-pointer hover:scale-110" />
            <FaGithub className="text-2xl md:text-3xl hover:text-orange-400 duration-200 cursor-pointer hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

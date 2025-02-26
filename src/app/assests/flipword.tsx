import React from "react";
import { FlipWords } from "../component/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Web Developer", "UI & UX Designer"];

  return (
    <div className="flex justify-center items-center px-4">
      <div className="text-4xl mx-auto text-black dark:text-white font-extrabold">
        <FlipWords words={words} />
        <br />
      </div>
    </div>
  );
}

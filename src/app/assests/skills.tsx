import { HoverEffect } from "../component/ui/card-hover-effect";

export function Skills() {
  return (
    <div id="skills" className="max-w-5xl mx-auto px-8">
      <h1 className="text-4xl font-extrabold text-center underline underline-offset-2">Skills</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "HTML",
    percentage: 100,
    caption: "Excellent",
    image: "/images/html.jpg",
  },
  {
    title: "CSS",
    percentage: 95,
    caption: "Very Good",
    image: "/images/css.png",
  },
  {
    title: "JavaScript",
    percentage: 85,
    caption: "Very Good",
    image: "/images/js.jpg",
  },
  {
    title: "TypeScript",
    percentage: 85,
    caption: "Good",
    image: "/images/ts.jpg",
  },
  {
    title: "Next.js",
    percentage: 100,
    caption: "Very Good",
    image: "/images/nextjs.png",
  },
  {
    title: "Tailwind CSS",
    percentage: 88,
    caption: "Very Good",
    image: "/images/tailwind.jpg",
  },
];

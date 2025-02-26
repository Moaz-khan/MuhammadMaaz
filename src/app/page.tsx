import Aboutme from "./assests/aboutme";
import { Contact } from "./assests/contact";
import Hero from "./assests/hero";
import Project from "./assests/project";
import { Skills } from "./assests/skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Aboutme />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

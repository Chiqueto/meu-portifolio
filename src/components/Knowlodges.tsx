import { DiJavascript, DiMongodb, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import Badge from "./Badge";

const Knowlodges = () => {
  const myExperiences = [
    {
      name: "JavaScript",
      image: (
        <DiJavascript
          size={40}
          className="text-zinc-200 hover:text-zinc-50 transition-transform transform duration-300 ease-in-out"
        />
      ),
    },
    {
      name: "React",
      image: (
        <DiReact
          size={40}
          className="text-zinc-200 hover:text-zinc-50 transition-transform transform duration-300 ease-in-out"
        />
      ),
    },
    {
      name: "Node.js",
      image: (
        <FaNodeJs
          size={40}
          className="text-zinc-200 hover:text-zinc-50 transition-transform transform duration-300 ease-in-out"
        />
      ),
    },
    {
      name: "TypeScript",
      image: (
        <SiTypescript
          size={40}
          className="text-zinc-200 hover:text-zinc-50 transition-transform transform duration-300 ease-in-out"
        />
      ),
    },
    {
      name: "Next.js",
      image: (
        <RiNextjsFill
          size={40}
          className="text-zinc-200 hover:text-zinc-50 transition-transform transform duration-300 ease-in-out"
        />
      ),
    },
    {
      name: "SQL",
      image: (
        <TbSql
          size={40}
          className="text-zinc-200 hover:text-zinc-50 transition-transform transform duration-300 ease-in-out"
        />
      ),
    },
    {
      name: "MongoDB",
      image: (
        <DiMongodb
          size={40}
          className="text-zinc-200 hover:text-zinc-50 transition-transform transform duration-300 ease-in-out"
        />
      ),
    },
    {
      name: "TailwindCSS",
      image: (
        <RiTailwindCssFill
          size={40}
          className="text-zinc-200 hover:text-zinc-50 transition-transform transform duration-300 "
        />
      ),
    },
  ];
  return (
    <section className="space-y-12">
      <h2 className="text-center text-zinc-400 font-semibold text-xl uppercase tracking-widest">
        Experiência com
      </h2>
      <ul className="flex flex-row flex-wrap sm:gap-14 items-center justify-center mx-auto sm:max-w-screen-sm max-w-[90%] gap-7">
        {myExperiences.map((experience) => (
          <Badge
            key={experience.name}
            image={experience.image}
            name={experience.name}
          />
        ))}
      </ul>
    </section>
  );
};

export default Knowlodges;

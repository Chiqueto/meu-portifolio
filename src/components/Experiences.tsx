import { DiJavascript, DiMongodb, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbSql } from "react-icons/tb";

const Experiences = () => {
  const myExperiences = [
    {
      name: "JavaScript",
      image: <DiJavascript size={40} className="text-zinc-200" />,
    },
    {
      name: "React",
      image: <DiReact size={40} className="text-zinc-200" />,
    },
    {
      name: "Node.js",
      image: <FaNodeJs size={40} className="text-zinc-200" />,
    },
    {
      name: "TypeScript",
      image: <SiTypescript size={40} className="text-zinc-200" />,
    },
    {
      name: "Next.js",
      image: <RiNextjsFill size={40} className="text-zinc-200" />,
    },
    {
      name: "SQL",
      image: <TbSql size={40} className="text-zinc-200" />,
    },
    {
      name: "MongoDB",
      image: <DiMongodb size={40} className="text-zinc-200" />,
    },
    {
      name: "TailwindCSS",
      image: <RiTailwindCssFill size={40} className="text-zinc-200" />,
    },
  ];
  return (
    <section className="space-y-12">
      <h2 className="text-center text-zinc-400 font-semibold text-xl uppercase tracking-widest">
        Experiência com
      </h2>
      <ul className="flex flex-row flex-wrap md:gap-14 items-center justify-center mx-auto md:max-w-[40%] max-w-[90%] gap-7">
        {myExperiences.map((experience) => (
          <li className="flex flex-col items-center justify-center">
            {experience.image}
            <p className="text-zinc-200 text-center">{experience.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experiences;

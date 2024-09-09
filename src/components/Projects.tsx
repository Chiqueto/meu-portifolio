import { ArrowUpRightIcon } from "lucide-react";

const Projects = () => {
  const myProjects = [
    {
      name: "FSW-Barber",
      image: "fsw-barber.png",
      link: "https://www.example.com",
    },
    {
      name: "Plann.er",
      image: "plann.er.png",
      link: "https://www.example.com",
    },
  ];

  return (
    <section
      id="Projetos"
      className="mt-24 flex flex-col justify-center items-center mx-auto max-w-[90%] sm:max-w-screen-lg"
    >
      <h1 className="font-extrabold text-4xl leading-tight bg-gradient-to-t to-[#FF8660]  from-[#D5491D] bg-clip-text text-transparent">
        Projetos
      </h1>
      <div className="sm:flex sm:flex-wrap sm:flex-1 sm:justify-center sm:items-center sm:gap-x-7">
        {myProjects.map((project) => (
          <div className="sm:w-72 w-60 mt-7 mb-10 sm:mb-0">
            <div className="h-44">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-t-2xl object-fill"
              />
            </div>
            <div className="relative bg-neutral-800 pr-4 pl-6 py-3 flex justify-between items-center rounded-b-2xl">
              <div>
                <p className="font-extrabold text-xs text-zinc-50 text-opacity-80">
                  Clique aqui para visitar
                </p>
                <p className="font-extrabold text-xl text-zinc-50">
                  {project.name}
                </p>
              </div>
              <a href={project.link}>
                <ArrowUpRightIcon className="text-zinc-50" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

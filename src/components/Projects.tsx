import { ArrowUpRightIcon } from "lucide-react";

const Projects = () => {
  const myProjects = [
    {
      name: "HTML Tutorial",
      image: "card_image.png",
      link: "https://www.example.com",
    },
  ];

  return (
    <section className="mt-24 flex flex-col justify-center items-center mx-auto">
      <h1 className="font-extrabold text-4xl bg-gradient-to-t to-[#FF8660]  from-[#D5491D] bg-clip-text text-transparent">
        Projetos
      </h1>
      <div>
        {myProjects.map((project) => (
          <div className="md:w-96 w-80 mt-7 mb-20">
            <img
              src={project.image}
              alt={project.name}
              className="max-h-60 rounded-t-2xl"
            />
            <div className="bg-neutral-800 pr-4 pl-6 py-3 flex justify-between items-center rounded-b-2xl">
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

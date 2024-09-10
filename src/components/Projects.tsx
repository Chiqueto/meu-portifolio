import ProjectCard from "./ProjectCard";

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
    {
      name: "To do List",
      image: "todo.png",
      link: "https://www.linkedin.com/posts/luis-felipe-chiqueto_nodejs-express-mongodb-activity-7239307696338800640-95C-?utm_source=share&utm_medium=member_desktop",
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
          <ProjectCard
            key={project.name}
            image={project.image}
            name={project.name}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

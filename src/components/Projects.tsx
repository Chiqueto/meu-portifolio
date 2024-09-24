import { ReactNode, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectVideo from "./ProjectVideo";

const Projects = () => {
  const myProjects = [
    {
      name: "FSW-Barber",
      image: "fsw-barber.png",
      linkLinkedin: "#",
      linkGithub: "https://github.com/Chiqueto/fsw-week",
    },
    {
      name: "Plann.er",
      image: "plann.er.png",
      linkLinkedin: "#",
      linkGithub: "https://github.com/Chiqueto/fsw-week",
    },
    {
      name: "To do List",
      image: "todo.png",
      linkLinkedin:
        "https://www.linkedin.com/posts/luis-felipe-chiqueto_nodejs-express-mongodb-activity-7239307696338800640-95C-?utm_source=share&utm_medium=member_desktop",
      linkGithub: "https://github.com/Chiqueto/fsw-week",
      video: (
        <iframe
          className="mx-auto w-[320px] h-[180px] sm:w-[720px] sm:h-[405px]"
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7239307519758663680?compact=1"
          title="Publicação incorporada"
        ></iframe>
      ),
    },
  ];

  interface ProjectDataProps {
    title: string;
    video: ReactNode;
  }

  const [isProjectVideoOpen, setProjectVideoOpen] = useState(false);

  const [projectData, setProjectData] = useState<ProjectDataProps>();

  function openProjectvideo(data: ProjectDataProps) {
    setProjectData(data);
    setProjectVideoOpen(true);
  }

  function closeProjectvideo() {
    setProjectVideoOpen(false);
  }
  useEffect(() => {
    if (isProjectVideoOpen) {
      document.body.style.overflow = "hidden"; // Bloqueia o scroll
    } else {
      document.body.style.overflow = "auto"; // Reativa o scroll
    }

    // Limpeza ao desmontar o componente
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isProjectVideoOpen]);

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
            title={project.name}
            linkLinkedin={project.linkLinkedin}
            linkGithub={project.linkGithub}
            video={project.video}
            openProjectVideo={openProjectvideo}
          />
        ))}
        {isProjectVideoOpen && (
          <ProjectVideo
            key={projectData?.title}
            title={projectData?.title}
            closeProjectVideo={closeProjectvideo}
            video={projectData?.video}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;

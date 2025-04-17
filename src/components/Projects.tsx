import { ReactNode, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectMain from "./ProjectMain";

const Projects = () => {
  const myProjects = [
    // {
    //   name: "FSW-Barber",
    //   image: "fsw-barber.png",
    //   linkedinLink: "#",
    //   githubLink: "https://github.com/Chiqueto/fsw-week",
    // },
    {
      name: "Plann.er",
      image: "plann.er.png",
      linkedinLink: "https://www.linkedin.com/posts/luis-felipe-chiqueto_reactjs-tailwind-rocketseat-activity-7217001306375208960-30aI?utm_source=share&utm_medium=member_desktop",
      githubLink: "https://github.com/Chiqueto/Plann.er",
      accessLink: null,
      main: (
        <div className="sm:h-52   ">
          <img
            src="plann.er.png"
            alt={"Imagem do projeto"}
            className="rounded-t-2xl object-cover object-top h-full w-full"
          />
        </div>
      ),
    },
    {
      name: "To do List",
      image: "todo.png",
      linkedinLink:
        "https://www.linkedin.com/posts/luis-felipe-chiqueto_nodejs-express-mongodb-activity-7239307696338800640-95C-?utm_source=share&utm_medium=member_desktop",
      githubLink: "https://github.com/Chiqueto/ToDo",
      accessLink: null,
      main: (
        <iframe
          className="mx-auto w-[320px] h-[180px] sm:w-[720px] sm:h-[405px]"
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7239307519758663680?compact=1"
          title="Publicação incorporada"
        ></iframe>
      ),
    },
    {
      name: "VirtuaFab",
      image: "virtuaFab.jpg",
      linkedinLink:
        "https://www.linkedin.com/posts/renan-de-oliveira-silva-416721289_inovaaexaeto-senaigrandprix-realidadeaumentada-ugcPost-7261727290282156032-TzKi?utm_source=share&utm_medium=member_desktop",
      githubLink: null,
      accessLink: null,
      main: (

        <iframe
          className="mx-auto w-[320px] h-[180px] sm:w-[720px] sm:h-[405px]"
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7261727290282156032?compact=1"
          title="Publicação incorporada">
        </iframe>
      ),
    },
    {
      name: "GymLanding",
      image: "gymLanding.png",
      linkedinLink: null,
      githubLink: "https://github.com/Chiqueto/GymLanding",
      accessLink: "https://gym-landing-black.vercel.app/",
      main: (
        <>
          <div className="hidden md:block w-[600px]"><iframe src="https://gym-landing-black.vercel.app/" className="h-[600px] w-[100%]" width="100%" height="100%"></iframe></div>
          <iframe
            className=" md:hidden block mx-auto w-[320px] h-[180px] sm:w-[720px] sm:h-[405px]"
            src="https://drive.google.com/file/d/1hF7m2_HyaFHK1I7z38lS2IaHDJGu-_Q6/view?usp=sharing"
            title="Publicação incorporada">
          </iframe>
        </>

      ),
    },
  ];

  interface ProjectDataProps {
    title: string;
    main: ReactNode;
  }

  const [isProjectMainOpen, setProjectMainOpen] = useState(false);

  const [projectData, setProjectData] = useState<ProjectDataProps>();

  function openProjectMain(data: ProjectDataProps) {
    setProjectData(data);
    setProjectMainOpen(true);
  }

  function closeProjectMain() {
    setProjectMainOpen(false);
  }
  useEffect(() => {
    if (isProjectMainOpen) {
      document.body.style.overflow = "hidden"; // Bloqueia o scroll
    } else {
      document.body.style.overflow = "auto"; // Reativa o scroll
    }

    // Limpeza ao desmontar o componente
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isProjectMainOpen]);

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
            linkedinLink={project.linkedinLink}
            githubLink={project.githubLink}
            accessLink={project.accessLink}
            main={project.main}
            openProjectMain={openProjectMain}
          />
        ))}
        {isProjectMainOpen && (
          <ProjectMain
            key={projectData?.title}
            title={projectData?.title}
            closeProjectMain={closeProjectMain}
            main={projectData?.main}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;

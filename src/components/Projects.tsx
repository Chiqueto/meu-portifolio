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
    {
      name: "Pokedex",
      image: "https://github.com/user-attachments/assets/863895dc-c5ac-48f2-9ab2-186df56e7cfa",
      linkedinLink: null,
      githubLink: "https://github.com/Chiqueto/pokedex",
      accessLink: "https://pokedex-git-v2-luis-felipe-mozer-chiquetos-projects.vercel.app/",
      main: (

        <div className="max-w-3xl mx-auto overflow-y-auto h-[500px] p-4 rounded-lg shadow-lg border border-gray-300 text-white">
          <h1 className="text-3xl font-bold mb-4">📘 Pokédex!</h1>
          <p className="mb-4">Uma aplicação web feita com React que permite explorar Pokémon por nome ou por geração, trazendo detalhes completos sobre cada um deles!</p>

          <h2 className="text-2xl font-semibold mb-2">🔄 Versão 2 (Atual)</h2>
          <p><a href="https://pokedex-8gc8d6k1c-luis-felipe-mozer-chiquetos-projects.vercel.app/" className="text-blue-500">Acessar Pokedex V2</a></p>

          <h3 className="text-xl font-semibold mt-4">🎯 Objetivo</h3>
          <p className="mb-4">Criar uma aplicação responsiva com rotas dinâmicas, possibilitando a navegação entre gerações e visualização detalhada dos Pokémon.</p>

          <h3 className="text-xl font-semibold mt-4">📸 Screenshots</h3>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://github.com/user-attachments/assets/c8a5b307-27e6-4cc6-8308-5a917bb0eb50" className="w-full" />
            <img src="https://github.com/user-attachments/assets/c42457e1-c3af-4f7c-b4a4-d3838ea9d2d1" className="w-full" />
          </div>

          <h2 className="text-2xl font-semibold mt-8">🚀 Tecnologias Utilizadas</h2>
          <ul className="list-disc list-inside">
            <li>⚛️ React</li>
            <li>🌐 React Router DOM</li>
            <li>💅 Tailwind CSS</li>
            <li>🍃 ShadCN/UI</li>
            <li>🔍 PokéAPI</li>
            <li>📦 Vite</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">💻 Como rodar o projeto localmente</h2>
          <pre className="bg-gray-100 p-4 rounded text-black">
            <code>git clone https://github.com/chiqueto/pokedex.git <br />
              npm install <br />
              npm run dev</code>
          </pre>
        </div>

      ),
    },
    {
      name: "GameVerseR",
      image: "gameVerser.png",
      linkedinLink: null,
      githubLink: "https://github.com/Chiqueto/GameVerser",
      accessLink: null,
      main: (

        <div className="max-w-3xl mx-auto overflow-y-auto h-[500px] p-4 rounded-lg shadow-lg border border-gray-300 text-white">

          <h1 className="text-3xl font-bold mb-4">🎮 GameVerseR</h1>
          <p className="mb-4">O <strong>GameVerseR</strong> é um aplicativo Flutter completo que permite explorar os jogos mais populares do momento de forma rápida, segura e elegante!</p>

          <h2 className="text-2xl font-semibold mt-4">✨ Features</h2>
          <ul className="list-disc list-inside mb-4">
            <li>🔐 Login e Cadastro de Usuários via Firebase Authentication</li>
            <li>🔍 Pesquisa de jogos por nome (consulta dinâmica)</li>
            <li>🕹️ Listagem dos jogos mais populares</li>
            <li>🏷️ Exibição de gêneros e plataformas em chips estilizados</li>
            <li>📄 Visualização detalhada com capa grande, descrição e avaliação dos jogos</li>
            <li>🖼️ Layout responsivo e moderno</li>
            <li>🚀 Geração de APK de produção para Android</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-4">📸 Screenshots</h2>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://github.com/user-attachments/assets/be464f6e-8e03-4f53-adc0-2789c8dec8ce" className="w-full" />
            <img src="https://github.com/user-attachments/assets/b2e6277b-fce9-41d9-92ea-dae775899d35" className="w-full" />
            <img src="https://github.com/user-attachments/assets/48a70d26-596c-4db8-8a65-110aebb6aea3" className="w-full" />
            <img src="https://github.com/user-attachments/assets/c7d70bb0-fd19-46b0-a690-7ceb9197c86a" className="w-full" />
          </div>

          <h2 className="text-2xl font-semibold mt-8">🛠️ Tecnologias Utilizadas</h2>
          <ul className="list-disc list-inside">
            <li>🌐 Flutter</li>
            <li>💡 Dart</li>
            <li>🔐 Firebase Authentication</li>
            <li>🎮 API IGDB</li>
            <li>📅 Intl</li>
            <li>🎨 Material 3</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">⚙️ Como Rodar o Projeto</h2>
          <pre className="bg-gray-100 p-4 rounded text-black">
            <code>git clone https://github.com/Chiqueto/GameVerseR.git <br />
              flutter pub get <br />
              flutter run</code>
          </pre>
        </div>

      ),
    },
    {
      name: "Pokedex Mobile",
      image: "pokedex.png",
      imagePosition: "center",
      linkedinLink: null,
      githubLink: "https://github.com/Chiqueto/pokedex-mobile",
      accessLink: null,
      main: (

        <div className="max-w-3xl mx-auto overflow-y-auto h-[500px] p-4 rounded-lg shadow-lg border border-gray-300 text-white">
          <h1 className="text-3xl font-bold mb-4">📱 Pokédex Mobile</h1>
          <p className="mb-4">Uma aplicação mobile desenvolvida com Flutter que permite explorar Pokémon por nome ou por geração, trazendo detalhes completos sobre cada um deles!</p>

          <h2 className="text-2xl font-semibold mt-4">✨ Features</h2>
          <ul className="list-disc list-inside mb-4">
            <li>🔐 Login e Cadastro de Usuários com <strong>Firebase Authentication</strong></li>
            <li>🔍 Pesquisa de Pokémon por nome</li>
            <li>🕹️ Listagem dos Pokémon com imagens e status</li>
            <li>📄 Visualização detalhada com altura, peso e habilidades</li>
            <li>🖼️ Layout responsivo e moderno</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-4">📸 Screenshots</h2>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://github.com/user-attachments/assets/4a946698-f94f-486d-a79a-6b5bb0d4fa2a" className="w-full" />
            <img src="https://github.com/user-attachments/assets/f5e9a3f5-0749-41f4-b839-8a3e68436ac1" className="w-full" />
            <img src="https://github.com/user-attachments/assets/4aabcc95-6a4b-4892-ba6a-66cd9c4be466" className="w-full" />
          </div>

          <h2 className="text-2xl font-semibold mt-8">🚀 Tecnologias Utilizadas</h2>
          <ul className="list-disc list-inside">
            <li>🌐 Flutter</li>
            <li>💡 Dart</li>
            <li>🔍 PokeAPI</li>
            <li>🔐 Firebase Authentication</li>
            <li>📱 Material Design</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">⚙️ Como Rodar o Projeto</h2>
          <pre className="bg-gray-100 p-4 rounded text-black">
            <code>git clone https://github.com/Chiqueto/pokedex-mobile.git <br />
              flutter pub get <br />
              flutter run</code>
          </pre>
        </div>
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
            imagePosition={project.imagePosition}
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

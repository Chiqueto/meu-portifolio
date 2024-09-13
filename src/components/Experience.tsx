import Work from "./Work";

const Experiences = () => {
  const experiences = [
    {
      image: "./AltaMogiana2.png",
      title: "Aprendiz em Desenvolvimento de Sistemas",
      description:
        "Como jovem aprendiz, participei do curso técnico de Desenvolvimento de Sistemas promovido pelo SENAI, além de ser integrado às atividades de T.I. na usina. Essas atividades incluíram desenvolvimento de sistemas, manutenção de sistemas embarcados, suporte à infraestrutura, automação industrial e inovação tecnológica. Essas experiências me permitiram expandir minha visão e conhecimento sobre tecnologia e suas diversas aplicações nas áreas operacionais da usina.",
      duration: "Jan 2023 - Atualmente",
    },
    {
      image: "./Acedata.png",
      title: "Programador estagiário em ACEDATA SOFTWARE",
      description:
        "Como estagiário, fui responsável por desenvolver correções e melhorias no sistema ERP da empresa, tanto em ambientes Windows quanto Web. Para isso, aprendi a utilizar Genexus, a principal tecnologia empregada no desenvolvimento das soluções. Durante essa experiência, não apenas refinei minha lógica de programação, mas também adquiri habilidades essenciais de trabalho em equipe, aplicando a metodologia ágil SCRUM.",
      duration: "Mar 2023 - Dez 2023",
    },
  ];

  return (
    <section
      id="Experiencias"
      className="mx-auto text-center max-w-screen-sm mt-24 mb-24"
    >
      <h1 className="font-extrabold text-4xl leading-tight bg-gradient-to-t to-[#5BADFF]  from-[#1373D1] bg-clip-text text-transparent">
        Experiência
      </h1>

      {experiences.map((experience) => (
        <Work
          description={experience.description}
          duration={experience.duration}
          logo={experience.image}
          title={experience.title}
          key={experience.title}
        />
      ))}
    </section>
  );
};

export default Experiences;

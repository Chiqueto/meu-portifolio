const Experiences = () => {
  const experiences = [
    {
      image:
        "https://static.wixstatic.com/media/51d7bb_0049711b13e045b0865f73d6d9209d87~mv2.png/v1/fill/w_59,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/00000.png",
      title: "Aprendiz em Desenvolvimento de Sistemas",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google'score search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
      duration: "Jan 2023 - Atualmente",
    },
    {
      image:
        "https://acedata.com.br/wp-content/uploads/2016/04/cropped-icon-2.png",
      title: "Programador estagiário em ACEDATA SOFTWARE",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google'score search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
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
        <article className="mt-12 px-5">
          <div className="flex flex-row justify-between items-center">
            <div className="flex gap-2 items-center justify-center shrink-1 text-left">
              <img
                src={experience.image}
                alt=""
                className="w-8 h-8 sm:w-12 sm:h-12"
              />
              <h2 className="font-bold text-zinc-50 text-sm sm:text-xl">
                {experience.title}
              </h2>
            </div>{" "}
            <p className="text-zinc-400 text-xs sm:text-sm shrink-0">
              {experience.duration}
            </p>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm text-justify mt-2">
            {experience.description}
          </p>
        </article>
      ))}
    </section>
  );
};

export default Experiences;

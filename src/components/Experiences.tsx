const Experiences = () => {
  const myExperiences = [
    {
      name: "Javascript",
      imageUrl: "js-brands-solid.svg",
    },
    {
      name: "React",
      imageUrl: "react-brands-solid.svg",
    },
    {
      name: "Node.js",
      imageUrl: "node-js-brands-solid.svg",
    },
    {
      name: "TypeScript",
      imageUrl: "typescript-svgrepo-com.svg",
    },
    {
      name: "Next.js",
      imageUrl: "next-js-svgrepo-com.svg",
    },
    {
      name: "SQL",
      imageUrl: "database-solid.svg",
    },
    {
      name: "MongoDB",
      imageUrl: "mongodb-svgrepo-com.svg",
    },
    {
      name: "Tailwindcss",
      imageUrl: "tailwind-css-svgrepo-com.svg",
    },
  ];
  return (
    <section className="space-y-12">
      <h2 className="text-center text-zinc-400 font-semibold text-xl uppercase tracking-widest">
        Experiência com
      </h2>
      <ul className="flex flex-row gap-14 items-center justify-center">
        {myExperiences.map((experience) => (
          <li>
            <img
              className="h-10 w-10"
              src={experience.imageUrl}
              alt={experience.name}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experiences;

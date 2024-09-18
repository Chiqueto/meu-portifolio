interface WorkProps {
  logo: string;
  title: string;
  duration: string;
  description: string;
}

const Work = ({ logo, title, duration, description }: WorkProps) => {
  return (
    <article className="bg-gradient-to-r from-[#161513] to-zinc-800 mt-8 mx-3 sm:mx-1 px-5 py-3">
      <div className="flex flex-row justify-between items-center">
        <div className="flex gap-3 items-center justify-center shrink-1 text-left">
          <div className="w-12 h-12">
            <img
              src={logo}
              alt=""
              className="object-contain w-full h-full rounded-lg"
            />
          </div>
          <h2 className="font-bold text-zinc-50 text-sm sm:text-xl">{title}</h2>
        </div>{" "}
        <p className="text-zinc-400 text-xs sm:text-sm shrink-0">{duration}</p>
      </div>
      <p className="text-zinc-400 text-xs sm:text-sm text-justify mt-2">
        {description}
      </p>
    </article>
  );
};

export default Work;

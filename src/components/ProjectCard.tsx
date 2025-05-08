import { GithubIcon, LinkedinIcon, LinkIcon } from "lucide-react";
import { ReactNode } from "react";

interface ProjectData {
  title: string;
  main: ReactNode;

}

interface ProjectCardProps {
  image: string;
  title: string;
  linkedinLink: string | null;
  githubLink: string | null;
  accessLink: string | null;
  main: ReactNode;
  imagePosition?: string;
  openProjectMain: ({ title, main }: ProjectData) => void;
}

const ProjectCard = ({
  image,
  title,
  linkedinLink,
  githubLink,
  main,
  accessLink,
  imagePosition,
  openProjectMain,
}: ProjectCardProps) => {
  return (
    <div
      className="sm:w-2/5 w-full mt-7 mb-10 sm:mb-0 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer"
      onClick={() => openProjectMain({ title, main })}
    >
      <div className="sm:h-52   ">
        <img
          src={image}
          alt={title}
          className={`rounded-t-2xl object-cover object-${imagePosition ? imagePosition : "top"} h-full w-full`}
        />
      </div>

      <div className="relative bg-neutral-800 pr-4 pl-6 py-3 flex justify-between items-center rounded-b-2xl">
        <div>
          <p className="font-extrabold text-xs text-zinc-50 text-opacity-80">
            Clique aqui para visitar
          </p>
          <p className="font-extrabold text-xl text-zinc-50">{title}</p>
        </div>
        {githubLink && (
          <a target="_blank" href={githubLink}>
            <GithubIcon className="text-zinc-50" />
          </a>
        )}
        {linkedinLink && (
          <a target="_blank" href={linkedinLink}>
            <LinkedinIcon className="text-zinc-50" />
          </a>
        )}
        {accessLink && (
          <a target="_blank" href={accessLink}>
            <LinkIcon className="text-zinc-50" />
          </a>
        )}

      </div>
    </div>
  );
};

export default ProjectCard;

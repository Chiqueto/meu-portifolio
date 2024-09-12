import { ReactNode } from "react";

interface ExperienceProps {
  image: ReactNode;
  name: string;
}

const Badge = ({ image, name }: ExperienceProps) => {
  return (
    <li className="flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-125 ">
      {image}
      <p className="text-zinc-200 text-center transition-transform transform duration-300 ease-in-out hover:text-zinc-50">
        {name}
      </p>
    </li>
  );
};

export default Badge;

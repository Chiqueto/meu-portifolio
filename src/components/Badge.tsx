import { ReactNode } from "react";

interface ExperienceProps {
  image: ReactNode;
  name: string;
}

const Badge = ({ image, name }: ExperienceProps) => {
  return (
    <li className="flex flex-col items-center justify-center">
      {image}
      <p className="text-zinc-200 text-center">{name}</p>
    </li>
  );
};

export default Badge;

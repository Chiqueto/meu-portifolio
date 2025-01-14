import { X } from "lucide-react";
import { ReactNode } from "react";

interface ProjectMainProps {
  title: string | undefined;
  closeProjectMain: () => void;
  main: ReactNode;
}

const ProjectMain = ({
  title,
  closeProjectMain,
  main,
}: ProjectMainProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-neutral-800 max-w-fit px-5 py-6 -sm mx-auto rounded-2xl flex flex-col  gap-6">
        <div className="flex justify-between">
          <h2 className="text-zinc-50 font-semibold text-2xl">{title}</h2>
          <X
            className="text-zinc-50 size-8 cursor-pointer"
            onClick={closeProjectMain}
          />
        </div>
        {main}
      </div>
    </div>
  );
};

export default ProjectMain;

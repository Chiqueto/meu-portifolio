import { X } from "lucide-react";
import { ReactNode } from "react";

interface ProjectVideoProps {
  title: string | undefined;
  closeProjectVideo: () => void;
  video: ReactNode;
}

const ProjectVideo = ({
  title,
  closeProjectVideo,
  video,
}: ProjectVideoProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-neutral-800 max-w-fit px-5 py-6 -sm mx-auto rounded-2xl flex flex-col  gap-6">
        <div className="flex justify-between">
          <h2 className="text-zinc-50 font-semibold text-2xl">{title}</h2>
          <X
            className="text-zinc-50 size-8 cursor-pointer"
            onClick={closeProjectVideo}
          />
        </div>
        {video}
      </div>
    </div>
  );
};

export default ProjectVideo;

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <footer id="Contato" className="bg-header py-10 px-5">
      <div className="max-w-screen-sm mx-auto">
        <h2 className="font-bold text-zinc-50 text-2xl mb-8">Contato</h2>
        <p className="text-zinc-400 font-light text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          molestiae, perferendis, adipisci atque tempora quaerat dolores nisi
          quae eligendi dicta fugit aliquam quasi explicabo earum doloremque
          recusandae sunt itaque vitae?
        </p>
        <a href="mailto:lfchiqueto@gmail.com" className="hover:cursor-pointer">
          <p className="font-semibold text-zinc-300 flex items-center gap-2 mt-6 hover:underline hover:text-zinc-200">
            <MdEmail /> lfchiqueto@gmail.com
          </p>
        </a>
        <div className="text-zinc-200 flex gap-4 mt-10 ">
          <a href="https://instagram.com/lfchiqueto" target="_blank">
            <BsInstagram className="hover:text-zinc-50" />
          </a>
          <a
            href="https://www.linkedin.com/in/luis-felipe-chiqueto-628b8625a/"
            target="_blank"
          >
            <BsLinkedin className="hover:text-zinc-50" />
          </a>
          <a href="https://github.com/Chiqueto" target="_blank">
            <BsGithub className="hover:text-zinc-50" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

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
        <p className="font-semibold text-zinc-300 flex items-center gap-2 mt-6">
          <MdEmail /> lfchiqueto@gmail.com
        </p>
        <div className="text-zinc-50 flex gap-4 mt-10">
          <BsInstagram /> <BsLinkedin /> <BsGithub />
        </div>
      </div>
    </footer>
  );
};

export default Contact;

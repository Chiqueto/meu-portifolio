import { useEffect, useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { GiClick } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { ContactUs } from "./ContactUs";

const Contact = () => {
  const [isOpenContactUs, setIsOpenContactUs] = useState(false);

  const handleOpenContactUs = () => {
    setIsOpenContactUs(!isOpenContactUs);
  };

  useEffect(() => {
    if (isOpenContactUs) {
      document.body.style.overflow = "hidden"; // Bloqueia o scroll
    } else {
      document.body.style.overflow = "auto"; // Reativa o scroll
    }

    // Limpeza ao desmontar o componente
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenContactUs]);

  return (
    <footer id="Contato" className="bg-header py-10 px-5">
      {isOpenContactUs && <ContactUs closeModal={handleOpenContactUs} />}
      <div className="max-w-screen-sm mx-auto">
        <h2 className="font-bold text-zinc-50 text-2xl mb-8">Contato</h2>
        <p className="text-zinc-400 font-light text-sm">
          Sou estudante de Engenharia de Software pela UNIFACEF - Franca, tenho
          19 anos e moro em São Joaquim da Barra. Minha paixão pela área de
          tecnologia surgiu durante o curso técnico em Desenvolvimento de
          Sistemas, onde descobri meu interesse por criar soluções inovadoras.
          Atualmente, estou me especializando em Desenvolvimento Web com React,
          além de estudar banco de dados e backend. Meu grande sonho é aplicar
          essas habilidades para desenvolver aplicações voltadas ao mundo do
          esporte.
        </p>
        <div onClick={handleOpenContactUs} className="hover:cursor-pointer">
          <p className="font-semibold text-zinc-300 flex items-center gap-2 mt-6 hover:underline hover:text-zinc-200">
            <MdEmail /> lfchiqueto@gmail.com
          </p>
          <p className="font-semibold text-zinc-300 flex items-center gap-2 mt-1 hover:underline hover:text-zinc-200">
            <GiClick /> Entre em contato
          </p>
        </div>
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

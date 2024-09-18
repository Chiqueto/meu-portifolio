const Header = () => {
  return (
    <header className="w-full font-header py-8 bg-header">
      <img src="" alt="" />
      <ul className="font-semibold text-zinc-100 text-sm flex flex-row md:gap-16 gap-8 justify-center items-center">
        <li className="relative group text-zinc-100 hover:text-zinc-50">
          <a href="#Home">Home</a>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-fuchsia-600 group-hover:w-full transition-all duration-300"></span>
        </li>
        <li className="relative group text-zinc-100 hover:text-zinc-50">
          <a href="#Projetos">Projetos</a>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-fuchsia-600 group-hover:w-full transition-all duration-300"></span>
        </li>
        <li className="relative group text-zinc-100 hover:text-zinc-50">
          <a href="#Experiencias">Experiência</a>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-fuchsia-600 group-hover:w-full transition-all duration-300"></span>
        </li>
        <li className="relative group text-zinc-100 hover:text-zinc-50">
          <a href="#Contato">Contato</a>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-fuchsia-600 group-hover:w-full transition-all duration-300"></span>
        </li>
      </ul>
    </header>
  );
};

export default Header;

const Header = () => {
  return (
    <header className="w-full font-header py-8 bg-header">
      <img src="" alt="" />
      <ul className="font-semibold text-zinc-50 text-sm flex flex-row md:gap-16 gap-8 justify-center items-center">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Projetos">Projetos</a>
        </li>
        <li>
          <a href="#Experiencias">Experiência</a>
        </li>
        <li>
          <a href="#Contato">Contato</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;

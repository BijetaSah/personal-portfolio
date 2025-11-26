import Navbar from "./Navbar";

function Header() {
  return (
    <header className="py-2 px-5 flex items-center md:justify-around md:px-0 justify-between relative">
      <Navbar />
    </header>
  );
}

export default Header;

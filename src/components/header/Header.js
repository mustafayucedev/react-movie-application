import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between flex-wrap py-2 xl:mb-20 lg:mb-10 md:mb-5">
        <Logo />
        <Navbar />
      </header>
    </>
  );
};

export default Header;

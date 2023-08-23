import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between flex-wrap py-2 xl:mb-20 lg:mb-10 md:mb-5 relative">
        <Logo />
        <div className="lg:block hidden">
          <Navbar />
        </div>
        <div className="lg:hidden block">
          <MobileNavbar />
        </div>
      </header>
    </>
  );
};

export default Header;

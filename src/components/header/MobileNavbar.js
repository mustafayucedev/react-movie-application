import Navbar from "./Navbar";

import { useMovie } from "context/movie";

import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

const MobileNavbar = () => {
  const { hamburger, setHamburger } = useMovie();

  const navigationToggle = () => setHamburger(!hamburger);

  return (
    <>
      <button title="Menü" onClick={navigationToggle} className="text-white text-2xl">
        {hamburger ? <TfiClose /> : <RxHamburgerMenu />}
      </button>
      {hamburger ? <Navbar /> : false}
    </>
  );
};

export default MobileNavbar;

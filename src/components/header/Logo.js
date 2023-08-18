import { Link } from "react-router-dom";
import LogoImage from "assets/images/logo.png";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <img src={LogoImage} alt="Netflix" className="h-20" />
      </Link>
    </>
  );
};

export default Logo;

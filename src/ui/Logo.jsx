import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="logo-white.svg" alt="Yt logo" className="w-24 sm:w-32" />
    </Link>
  );
}

export default Logo;

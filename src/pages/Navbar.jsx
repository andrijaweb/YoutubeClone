import Logo from "../ui/Logo";
import SearchBar from "../ui/SearchBar";

function Navbar() {
  return (
    <div className="bg-stone-900 py-1 px-6 flex items-center justify-between sticky top-0">
      <Logo />
      <SearchBar />
    </div>
  );
}

export default Navbar;

function SearchBar() {
  return (
    <form>
      <input
        type="text"
        placeholder="Search video..."
        className="min-w-48 sm:min-w-64 border-1 border-stone-300 rounded-lg py-2 px-4 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-stone-500 focus:ring-opacity-50"
      />
    </form>
  );
}

export default SearchBar;

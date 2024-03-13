function Category({ category, selectedCategory, setSelectedCategory }) {
  return (
    <button
      className={`text-xl justify-self-center self-start flex gap-2 items-center hover:bg-red-600 transition-all duration-300 py-2 px-4 rounded-full w-48 ${
        category.name === selectedCategory && "bg-red-600"
      }`}
      onClick={() => setSelectedCategory(category.name)}
    >
      <span>{category.icon}</span>
      <span>{category.name}</span>
    </button>
  );
}

export default Category;

import { categories } from "../utils/helpers";
import Category from "./Category";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <aside className="flex flex-col gap-4 px-4">
      {categories.map((category) => (
        <Category
          category={category}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          key={category.name}
        />
      ))}
    </aside>
  );
}

export default Sidebar;

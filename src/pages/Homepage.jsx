import Sidebar from "../ui/Sidebar";
import Videos from "../ui/Videos";
import { apiVideos } from "../services/apiVideos";
import { useEffect, useState } from "react";
import Heading from "../ui/Heading";

function Homepage() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(
    function () {
      async function fetchVideos() {
        const data = await apiVideos(
          `search?part=snippet&q=${selectedCategory}`
        );

        setVideos(data.items);
      }
      fetchVideos();
    },
    [selectedCategory]
  );

  return (
    <div className="bg-stone-900 text-stone-100 grid grid-cols-[2fr_10fr] gap-4">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="py-1 px-2">
        <Heading />
        <Videos videos={videos} />
      </div>
    </div>
  );
}

export default Homepage;

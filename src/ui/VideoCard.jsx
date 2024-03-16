import { Link, useNavigate } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/helpers";

function VideoCard({ video }) {
  const navigate = useNavigate();

  const {
    id: { videoId },
    snippet,
  } = video;

  function handleNavigateVideo() {
    navigate(videoId ? `/video/${videoId}` : demoVideoUrl);
  }

  function handleNavigateChannel() {
    navigate(
      snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
    );
  }

  return (
    <div className="md:max-w-60 sm:max-w-full">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="overflow-hidden">
          <img
            className="bg-cover bg-center"
            src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt="thumbnail"
          />
        </div>

        <div className="h-28 bg-stone-800 p-4">
          <div onClick={handleNavigateVideo}>
            <h3 className="text-stone-100 font-medium text-sm">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </h3>
          </div>

          <div>
            <div onClick={handleNavigateChannel}>
              <h2 className="text-stone-400 font-bold text-xs">
                {snippet?.channelTitle.slice(0, 60) ||
                  demoChannelTitle.slice(0, 60)}
              </h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default VideoCard;

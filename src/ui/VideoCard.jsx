import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/helpers";

function VideoCard({ video }) {
  console.log(video);
  const {
    id: { videoId },
    snippet,
  } = video;

  return (
    <div className="md:max-w-xs sm:max-w-full">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="max-w-56 sm:max-w-xs h-44 overflow-hidden">
          <img
            className="bg-cover bg-center"
            src={snippet?.thumbnails?.high?.url}
            alt="thumbnail"
          />
        </div>

        <div className="h-28 bg-stone-800 p-4">
          <div>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <h3 className="text-stone-100 font-medium">
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
              </h3>
            </Link>
          </div>

          <div>
            <Link
              to={
                snippet?.channelId
                  ? `/channel/${snippet?.channelId}`
                  : demoChannelUrl
              }
            >
              <h2 className="text-stone-400 font-bold text-xs">
                {snippet?.channelTitle.slice(0, 60) ||
                  demoChannelTitle.slice(0, 60)}
              </h2>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default VideoCard;

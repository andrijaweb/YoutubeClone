import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
} from "../utils/helpers";

function ChannelCard({ channel }) {
  console.log(channel);
  const {
    id: { channelId },
    snippet,
  } = channel;
  return (
    <div className="md:w-80 sm:w-full flex flex-col items-center justify-center">
      <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
        <div className="overflow-hidden mb-4">
          <img
            className="max-w-52 h-52 rounded-full bg-cover bg-center"
            src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt="channel thumbnail"
          />
        </div>

        <div>
          <h3 className="text-stone-100 font-medium text-center">
            {snippet?.title || demoChannelTitle}
          </h3>
        </div>
      </Link>
    </div>
  );
}

export default ChannelCard;

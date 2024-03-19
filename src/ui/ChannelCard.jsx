import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
} from "../utils/helpers";
import ChannelCardAbout from "./ChannelCardAbout";

function ChannelCard({ channel }) {
  if (!channel || channel.length === 0) return null;

  const {
    id: { channelId },
    snippet,
  } = channel;

  return (
    <div className="md:w-60 sm:w-full flex flex-col items-center justify-center">
      <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
        <div className="overflow-hidden mb-4">
          <img
            className="max-w-48 h-48 rounded-full bg-cover bg-center"
            src={snippet.thumbnails.high.url || demoThumbnailUrl}
            alt="channel thumbnail"
          />
        </div>

        <div className="text-center text-stone-100">
          <h3 className="font-medium text-lg">
            {snippet.title || demoChannelTitle}
          </h3>
          {channel.statistics && <ChannelCardAbout channel={channel} />}
        </div>
      </Link>
    </div>
  );
}

export default ChannelCard;

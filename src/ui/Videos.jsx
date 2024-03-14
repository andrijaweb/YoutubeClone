import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

function Videos({ videos }) {
  if (!videos) return;

  return (
    <div className="flex flex-wrap items-center gap-4">
      {videos.map((item, index) => (
        <div key={index}>
          {item.id.videoId && <VideoCard video={item} key={item.id.videoId} />}
          {item.id.channelId && (
            <ChannelCard channel={item} key={item.id.channelId} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Videos;

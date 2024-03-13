import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

function Videos({ videos }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {videos.map((item) => (
        <>
          {item.id.videoId && <VideoCard video={item} key={item.id.videoId} />}
          {item.id.channelId && (
            <ChannelCard channel={item} key={item.id.channelId} />
          )}
        </>
      ))}
    </div>
  );
}

export default Videos;

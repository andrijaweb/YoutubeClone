import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

function Videos({ videos }) {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-4">
      {videos.map((item, index) => (
        <React.Fragment key={index}>
          {item.id.videoId && <VideoCard video={item} key={item.id.videoId} />}
          {item.id.channelId && (
            <ChannelCard channel={item} key={item.id.channelId} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Videos;

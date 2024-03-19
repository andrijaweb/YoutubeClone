import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiVideos } from "../services/apiVideos";
import Videos from "../ui/Videos";

import { HiThumbUp } from "react-icons/hi";

import ReactPlayer from "react-player";

function VideoDetail() {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  console.log(videoDetails);

  useEffect(
    function () {
      async function fetchVideoDetails() {
        const dataVideoDetails = await apiVideos(
          `videos?part=snippet,statistics&id=${id}`
        );

        const relatedVideos = await apiVideos(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );

        setVideoDetails(dataVideoDetails.items[0]);
        setVideos(relatedVideos.items);
      }
      fetchVideoDetails();
    },
    [id]
  );

  if (!videoDetails || videoDetails.length === 0) return;
  if (!videos) return;

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <div className="w-full sticky top-[86px] bg-stone-900 py-8 px-6 text-stone-100">
      <div className="grid grid-cols-[8fr_4fr]">
        <div className="mr-4">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
            width="100%"
            height="420px"
          />
          <div>
            <div className="flex align-center justify-between max-w-[100%]">
              <h3 className="text-lg font-medium mt-4">{title}</h3>
              <p className="flex items-center gap-2 text-stone-400">
                <span>
                  <HiThumbUp />
                </span>{" "}
                {parseInt(likeCount).toLocaleString()} likes
              </p>
            </div>
            <div className="flex items-center justify-between my-4">
              <p className="text-2xl font-bold">{channelTitle}</p>
              <p className="text-stone-400">
                {parseInt(viewCount).toLocaleString()} views
              </p>
            </div>
            <p>{description}</p>
          </div>
        </div>
        <Videos videos={videos} />
      </div>
    </div>
  );
}

export default VideoDetail;

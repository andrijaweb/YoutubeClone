import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiVideos } from "../services/apiVideos";
import ChannelCard from "../ui/ChannelCard";
import Videos from "../ui/Videos";

function ChannelDetail() {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  console.log(channelDetails);
  useEffect(
    function () {
      async function fetchChannelDetails() {
        const dataChannelDetails = await apiVideos(
          `channels?part=snippet&id=${id}`
        );
        const dataVideos = await apiVideos(
          `search?channelId=${id}&part=snippet&order=date`
        );

        setChannelDetails(dataChannelDetails?.items[0]);
        setVideos(dataVideos.items);
      }
      fetchChannelDetails();
    },
    [id]
  );

  if (!channelDetails || channelDetails.length === 0) return null;
  return (
    <div className="bg-stone-900 px-4 py-4">
      <div className="max-w-5xl mx-auto">
        <img
          className="bg-cover bg-center bg-no-repeat w-full h-72 rounded-3xl"
          src={channelDetails.brandingSettings.image.bannerExternalUrl}
          alt="channel banner"
        />
      </div>
      <div className="flex items-center justify-center my-8">
        <ChannelCard channel={channelDetails} />
      </div>
      <Videos videos={videos} />
    </div>
  );
}

export default ChannelDetail;

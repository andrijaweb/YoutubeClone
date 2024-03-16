function ChannelCardAbout({ channel }) {
  return (
    <>
      <p className="text-center text-stone-400">
        {Number(channel?.statistics?.subscriberCount).toLocaleString()}{" "}
        Subscribers
      </p>
      <p className="text-center text-stone-400">
        <span className="mr-2">
          {Number(channel?.statistics?.videoCount).toLocaleString()} videos
        </span>
        <span>
          {Number(channel?.statistics?.viewCount).toLocaleString()} views
        </span>
      </p>
    </>
  );
}

export default ChannelCardAbout;

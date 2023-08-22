import React, { useEffect, useState } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/contants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  console.log(videos);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const videoData = await response.json();
    setVideos(videoData.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard key={videos[0].id} info={videos[0]}/>}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

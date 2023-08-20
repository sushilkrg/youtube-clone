import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
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
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

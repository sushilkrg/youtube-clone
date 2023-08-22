import React from "react";


const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg cursor-pointer">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-semibold">{channelTitle}</li>
        <li>{(statistics.viewCount > 1000000)? `${Math.round(statistics.viewCount/1000000)}M` : (statistics.viewCount)} views</li>
      </ul>
    </div>
  );
};

// Higher order component (takes component as parameter or return component)
export const AdVideoCard = ({info}) => {

  return (
    <div className="border border-red-600">
      <VideoCard info={info}/>
    </div>
  );
}

export default VideoCard;

import React from "react";
import ReactPlayer from "react-player";

const VideoCard = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-[3rem] cursor-pointer">
      <div>
        <ReactPlayer
          style={{
            borderRadius: "10px",
            // overflow: "hidden",
          }}
          url={data.VideoLink}
          controls={false}
          className="ReactPlayer"
        />
      </div>
      <div className="flex flex-col gap-[1rem]">
        <h3 className="text-4xl font-bold">{data.Name}</h3>
        <h5 className="text-2xl font-semibold text-[#ff9416]">
          {data.CollageName}
        </h5>
        <p className="text-[20px]">{data.Description}</p>
      </div>
    </div>
  );
};

export default VideoCard;

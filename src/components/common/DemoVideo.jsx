import img1 from "../../images/DSDemoClassImage.png";
import React, { useState } from "react";
import { RiPlayFill } from "react-icons/ri"; // Importing play icon from react-icons
import { RxCross2 } from "react-icons/rx";
//import "../../../src/ExternalCSS.css"
import { FaPlayCircle } from "react-icons/fa";

const DemoVideo = ({ myvideo, BGImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <div className="">
      <div
        className="relative h-[350px] w-[100%] cursor-pointer"
        style={{
          backgroundImage: `url(${BGImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "5%",
        }}
      >
        {/* <div className='relative h-full text-[100px] flex justify-center items-center' onClick={!isPlaying ? handlePlay : undefined}>
        <FaPlayCircle className='text-[#f2f8fa] cursor-pointer'/>
        </div> */}

        {isPlaying ? null : ( // Show video cover only if not playing
          <div
            className="relative h-full text-[100px] flex justify-center items-center"
            onClick={!isPlaying ? handlePlay : undefined}
          >
            <button className="VideoBTNDHARAM">
              <FaPlayCircle className="text-[#ff9416] cursor-pointer relative z-[9]" />
            </button>
          </div>
        )}
      </div>
      {isPlaying && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-75">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-black bg-[#bfc5c7] p-2 rounded-full cursor-pointer z-50"
              onClick={handleClose}
            >
              <RxCross2 className=" text-black text-2xl font-bold" />
            </button>
            {/* <video
              className="w-full h-[600px] max-w-lg"
              controls
              autoPlay
              onEnded={handleClose}
            >
              <source src={myvideo} type="video/mp4" />
            </video> */}
            <iframe
              className="w-full h-[400px] md:w-[600px]"
              src={myvideo}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoVideo;

// {isPlaying && (
//   <div className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-75">
//     <div className="relative">
//       <button
//         className="absolute top-2 right-2 text-white text-2xl cursor-pointer z-50"
//         onClick={handleClose}
//       >
//         <ImCross />
//       </button>
//       <video
//         className="w-full h-[600px] max-w-lg"
//         controls
//         autoPlay
//         onEnded={handleClose}
//       >
//         <source src={videosrc} type="video/mp4" />
//         {/* Your browser does not support the video tag. */}
//       </video>
//     </div>
//   </div>
// )}
// <div
//   className="bg-gray-100 flex justify-center items-center relative rounded-lg"
//   onClick={!isPlaying ? handlePlay : undefined} // only allow clicking if not playing
// >
//   {isPlaying ? null : ( // Show video cover only if not playing
//     <div className="absolute cursor-pointer flex justify-center items-center">
//       <RiPlayFill className="h-[100px] w-[300px] text-white" /> {/* Using the play icon */}
//     </div>
//   )}
//   <div className='w-full'>
//     <img src={img1} alt="Video Cover" className='w-full h-full object-cover rounded-lg' />
//   </div>
// </div>

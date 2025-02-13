"use client";

import React, {useEffect, useRef} from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoJS = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videojs(videoRef.current, {
        controls: true,
        autoplay: true,
        responsive: true,
        fluid: true,
        sources: [
          {
            src: "https://mmd.jonextugundu.net/_v7/2f896774211c473f56639f2a76d52835f5982d8b4bd660be89a64a41b04b563b6084680517e3c7da063c53ce927dcaa21057298efc84147825a9dc68aabff81293bbb8b4e6e8092a8d2ee10e4f385fcf0a95c12a3d364a42678544cd6974b08260b2e698e7e261d32242bf21c9536729c02c7b472d562c3b975aaad3a62f3d7e/master.m3u8",
            type: "application/x-mpegURL",
          },
        ],
      });
    }
  }, []);

  return (
    <div data-vjs-player className="w-full">
      <video ref={videoRef} className="video-js vjs-default-skin" />
    </div>
  );
};

export default VideoJS;

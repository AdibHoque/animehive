"use client";

import React, {useEffect, useRef, useState} from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoJS = ({
  streamLink,
  tracks,
}: {
  streamLink: string;
  tracks: {file: string; label: string; kind: string; default: boolean}[];
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const videoRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-matrix");
      videoRef.current.appendChild(videoElement);

      playerRef.current = videojs(videoElement, {
        controls: true,
        autoplay: true,
        responsive: true,
        fluid: true,
        sources: [
          {
            src: streamLink,
            type: "application/x-mpegURL",
          },
        ],
        tracks: tracks
          .filter((t) => t.kind == "captions")
          .map((subtitle) => ({
            kind: "subtitles",
            label: subtitle.label,
            src: subtitle.file,
            srclang: "en",
          })),
      });

      console.log(
        tracks
          .filter((t) => t.kind == "captions")
          .map((subtitle) => ({
            kind: "subtitles",
            label: subtitle.label,
            src: subtitle.file,
            srclang: "en",
          }))
      );

      playerRef.current.on("waiting", () => setLoading(true));
      playerRef.current.on("canplay", () => setLoading(false));
      playerRef.current.on("error", () => setLoading(false));
    } else {
      const player = playerRef.current;
      player.autoplay(true);
      player.src([
        {
          src: streamLink,
          type: "application/x-mpegURL",
        },
      ]);
    }
  }, [streamLink]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player className="relative w-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <span className="loader2 opacity-70"></span>
        </div>
      )}
      <div ref={videoRef} />
    </div>
  );
};

export default VideoJS;

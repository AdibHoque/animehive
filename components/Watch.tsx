"use client";

import {useEffect, useState} from "react";
import VideoJS from "./VideoJS";

type Episodes = {
  totalEpisodes: number;
  episodes: {
    title: string;
    episodeId: string;
    number: number;
    isFiller: boolean;
  }[];
};

const Watch = ({data}: {data: Episodes}) => {
  const [streamLink, setStreamLink] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState("");
  const [loadingEpisode, setLoadingEpisode] = useState("");

  useEffect(() => {
    handleEpisodeClick(data.episodes[0].episodeId);
  });

  const handleEpisodeClick = (episodeId: string) => {
    setSelectedEpisode(episodeId);
    setLoadingEpisode(episodeId);

    fetch(
      `${process.env.NEXT_PUBLIC_ANIMEHIVE_API}/api/v2/hianime/episode/sources?animeEpisodeId=${episodeId}server=hd-1&category=dub`
    )
      .then((res) => res.json())
      .then((data) => {
        setStreamLink(data.data.sources[0]?.url || "");
      })
      .finally(() => {
        setTimeout(() => {
          setLoadingEpisode("");
        }, 2000);
      });
  };

  return (
    <div className="w-full flex flex-col-reverse xl:flex-row p-4 lg:p-10 ">
      <div className="w-full xl:w-[25%] h-screen">
        <div className="p-4 flex w-full gap-2 items-center bg-base-300 justify-between">
          <p className="font-medium text-xs">List of Episodes:</p>
          <label className="input-sm input w-[10rem]">
            <svg
              className="h-[1em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Number of Ep" />
          </label>
        </div>
        <div className="h-full bg-base-200 p-2 overflow-y-auto">
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-5 gap-1">
            {data.episodes.slice(0, 100).map((ep) => (
              <button
                key={ep.episodeId}
                onClick={() => handleEpisodeClick(ep.episodeId)}
                className={`btn btx-xs opacity-70 flex justify-center items-center ${
                  selectedEpisode === ep.episodeId
                    ? "bg-green-500 text-white"
                    : "bg-neutral-600"
                }`}
              >
                {loadingEpisode === ep.episodeId ? (
                  <span className="loading loading-spinner text-white opacity-70"></span>
                ) : (
                  ep.number
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full xl:w-3/4 xl:h-screen">
        {streamLink != "" && <VideoJS streamLink={streamLink} />}
        <div className="bg-base-100 h-full max-h-[136px]"></div>
      </div>
    </div>
  );
};

export default Watch;

"use client";

import {useEffect, useState} from "react";
import Player from "./Player";
import {FastForward, Mic, Plus, Radio, Rewind, Subtitles} from "lucide-react";

type Episodes = {
  totalEpisodes: number;
  episodes: {
    title: string;
    episodeId: string;
    number: number;
    isFiller: boolean;
  }[];
};

const Watch = ({data, name}: {data: Episodes; name: string}) => {
  const [streamLink, setStreamLink] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState("");
  const [loadingEpisode, setLoadingEpisode] = useState("");
  const [category, setCategory] = useState<"dub" | "sub">("dub");
  const [server, setServer] = useState<"hd-1" | "hd-2">("hd-1");

  useEffect(() => {
    const lastClick = localStorage.getItem(name);
    if (lastClick) {
      handleEpisodeClick(lastClick);
    } else {
      handleEpisodeClick(data.episodes[0].episodeId);
    }
  }, []);

  const handleEpisodeClick = (
    episodeId: string,
    serv?: "hd-1" | "hd-2",
    cate?: "dub" | "sub"
  ) => {
    setStreamLink("");
    setSelectedEpisode(episodeId);
    setLoadingEpisode(episodeId);

    fetch(
      `${
        process.env.NEXT_PUBLIC_ANIMEHIVE_API
      }/api/v2/hianime/episode/sources?animeEpisodeId=${episodeId}server=${
        serv ? serv : server
      }&category=${cate ? cate : category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStreamLink(data.data.sources[0]?.url || "");
        setTracks(data.data.tracks || []);
      })
      .finally(() => {
        setTimeout(() => {
          setLoadingEpisode("");
        }, 2000);
      });
    localStorage.setItem(name, episodeId);
  };

  const handleServer = (server: "hd-1" | "hd-2", category: "sub" | "dub") => {
    setServer(server);
    setCategory(category);
    handleEpisodeClick(selectedEpisode, server, category);
  };

  return (
    <div className="p-4 lg:p-10 relative max-lg:bg-black">
      <div className="hidden xl:flex items-center gap-2 absolute top-[8px]">
        <p className="text-sm font-light">Home</p>{" "}
        <div className="rounded-full bg-white/60 size-1"></div>
        <p className="text-sm font-light">TV</p>{" "}
        <div className="rounded-full bg-white/60 size-1"></div>
        <p className="text-sm font-light opacity-50">{name}</p>
      </div>

      <div className="w-full flex flex-col-reverse xl:flex-row gap-x-4">
        <div className="w-full xl:w-[25%] h-screen max-lg:border-y max-lg:border-dashed border-gray-600">
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
          <div className="h-full bg-base-200 p-2 overflow-y-auto  ">
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
        <div className="w-full xl:w-3/4 xl:h-screen h-full ">
          {streamLink !== "" ? (
            <Player streamLink={streamLink} tracks={tracks} name={name} />
          ) : (
            <div className="bg-black w-full h-full min-h-[40vh] flex items-center justify-center">
              <span className="loader2 opacity-70"></span>
            </div>
          )}
          <div className="h-full lg:max-h-[136px]">
            <div className="flex justify-between items-center px-2 text-xs md:text-sm my-2">
              <div className="flex gap-3.5">
                <p className="font-light max-md:hidden">
                  Light
                  <span className="font-medium text-green-500">{"  "}Off</span>
                </p>
                <p className="font-light ">
                  Auto Play
                  <span className="font-medium text-green-500">{"  "}On</span>
                </p>
                <p className="font-light">
                  Auto Next
                  <span className="font-medium text-green-500">{"  "}Off</span>
                </p>
                <p className="font-light max-md:hidden">
                  Auto Skip Intro
                  <span className="font-medium text-green-500">{"  "}Off</span>
                </p>
              </div>
              <div className="flex gap-2">
                <Rewind className="text-2xl hidden " fill="#ffffff" />{" "}
                <FastForward className="text-2xl hidden " fill="#ffffff" />{" "}
                <Plus className="text-2xl" />{" "}
                <Radio className="text-2xl text-green-500" />
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row xl:p-2">
              <div className="w-full lg:w-1/4 rounded-l-lg rounded-tr-lg max-xl:rounded-tr-none max-xl:rounded-bl-none bg-green-500  font-semibold text-base-200  p-2 flex flex-col justify-center items-center text-center text-xs">
                <p>You are watching</p>
                <p className="font-bold my-2">
                  Episode{" "}
                  {
                    data?.episodes?.find((a) => a.episodeId == selectedEpisode)
                      ?.number
                  }
                </p>
                <p>
                  If current server doesn&apos;t work please try other servers
                  beside.
                </p>
              </div>
              <div className="bg-base-300 flex flex-col p-4 rounded-r-lg max-xl:rounded-br-none lg:w-3/4 w-full">
                <div className="flex gap-4">
                  <h3 className="text-xs md:text-sm font-semibold flex gap-2 items-center">
                    <Subtitles /> SUB:
                  </h3>
                  <button
                    className={`btn btn-sm ${
                      category == "sub" && server == "hd-1" && "bg-green-500"
                    }`}
                    onClick={() => handleServer("hd-1", "sub")}
                  >
                    HD-1
                  </button>
                  <button
                    className={`btn btn-sm ${
                      category == "sub" && server == "hd-2" && "bg-green-500"
                    }`}
                    onClick={() => handleServer("hd-2", "sub")}
                  >
                    HD-2
                  </button>
                </div>
                <hr className="border-dashed opacity-20 my-3" />
                <div className="flex gap-4">
                  <h3 className="text-xs md:text-sm font-semibold flex gap-2 items-center">
                    <Mic /> DUB:
                  </h3>
                  <button
                    className={`btn btn-sm ${
                      category == "dub" && server == "hd-1" && "bg-green-500"
                    }`}
                    onClick={() => handleServer("hd-1", "dub")}
                  >
                    HD-1
                  </button>
                  <button
                    className={`btn btn-sm ${
                      category == "dub" && server == "hd-2" && "bg-green-500"
                    }`}
                    onClick={() => handleServer("hd-2", "dub")}
                  >
                    HD-2
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;

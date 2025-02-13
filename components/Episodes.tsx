import React from "react";

type Episodes = {
  totalEpisodes: number;
  episodes: {
    title: string;
    episodeId: string;
    number: number;
    isFiller: boolean;
  }[];
};

const Episodes = ({data}: {data: Episodes}) => {
  return (
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
              className="btn btx-xs bg-neutral-600 opacity-70"
            >
              {ep.number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Episodes;

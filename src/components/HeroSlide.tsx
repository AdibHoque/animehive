import {Calendar, ChevronRight, Clock, PlayCircle} from "lucide-react";

export interface SpotlightAnimeData {
  rank: number;
  id: string;
  name: string;
  description: string;
  poster: string;
  jname: string;
  episodes: {
    sub: number;
    dub: number;
  };
  type: string;
  otherInfo: string[];
}

const HeroSlide = ({data}: {data: SpotlightAnimeData}) => {
  return (
    <div
      className="bg-no-repeat bg-center md:bg-right h-[70vh] md:h-[80vh] lg:h-screen bg-cover max-md:mt-12"
      style={{
        backgroundImage: `url(${data.poster})`,
      }}
    >
      <div className="absolute top-0 hero-overlay bg-gradient-to-r from-base-100 from-20% via-base-100 via-10% to-green-500/10 z-1 opacity-90"></div>
      <div className="absolute top-0 w-full bg-gradient-to-t from-base-100 from-10% via-transparent to-transparent z-1 h-[80vh] lg:h-screen"></div>

      <div className="h-full flex flex-col gap-y-4 md:gap-y-6 items-start justify-end md:justify-center px-4 md:pl-14 md:pr-20 max-w-[42rem] max-md:pb-10">
        <h2 className="text-green-500 text-xl z-2">#{data.rank} Spotlight</h2>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold z-2 -mt-3">
          {data.name}
        </h1>

        <div className="flex gap-4 z-2 max-md:hidden">
          <div className="flex gap-1 opacity-90 justify-center items-center text-sm">
            <PlayCircle /> {data.otherInfo[0]}
          </div>
          <div className="flex gap-1 opacity-90 justify-center items-center text-sm">
            <Clock /> {data.otherInfo[1]}
          </div>
          <div className="flex gap-1 opacity-90 justify-center items-center text-sm">
            <Calendar /> {data.otherInfo[2]}
          </div>
        </div>

        <p className="z-2 max-md:hidden text-left">
          {data.description.slice(0, 200)}...
        </p>

        <div className="z-2 flex gap-4">
          <button className="btn btn-primary rounded-3xl bg-green-500 hover:bg-green-700 border-none text-black shadow-none">
            <PlayCircle /> Watch Now
          </button>
          <button className="btn btn-primary rounded-3xl bg-gray-700 hover:bg-gray-800 border-none shadow-none">
            Detail <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;

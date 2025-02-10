import {Calendar, ChevronRight, Clock, PlayCircle} from "lucide-react";

const Hero = () => {
  return (
    <div
      className="bg-no-repeat bg-center md:bg-right h-[70vh] md:h-[80vh] lg:h-screen bg-cover max-md:mt-12"
      style={{
        backgroundImage:
          "url(https://cdn.noitatnemucod.net/thumbnail/1366x768/100/db8603d2f4fa78e1c42f6cf829030a18.jpg)",
      }}
    >
      <div className="absolute top-0 hero-overlay bg-gradient-to-r from-base-100 from-20% via-base-100 via-10% to-green-500/10 z-1 opacity-90"></div>
      <div className="absolute top-0 w-full bg-gradient-to-t from-base-100 from-10% via-transparent to-transparent z-1 h-[80vh] lg:h-screen"></div>

      <div className="h-full flex flex-col gap-y-4 md:gap-y-6 items-start justify-end md:justify-center px-4 md:pl-14 md:pr-20 max-w-[42rem] max-md:pb-10">
        <h2 className="text-green-500 text-xl z-2">#1 Spotlight</h2>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold z-2 -mt-3">
          One Piece
        </h1>

        <div className="flex gap-4 z-2 max-md:hidden">
          <div className="flex gap-1 opacity-90 justify-center items-center text-sm">
            <PlayCircle /> TV
          </div>
          <div className="flex gap-1 opacity-90 justify-center items-center text-sm">
            <Clock /> 24m
          </div>
          <div className="flex gap-1 opacity-90 justify-center items-center text-sm">
            <Calendar /> October 20, 1999
          </div>
        </div>

        <p className="z-2 max-md:hidden">
          Gold Roger was known as the "Pirate King," the strongest and most
          infamous being to have sailed the Grand Line. The capture and
          execution of Roger by the World Government brought a change throughout
          the...
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

export default Hero;

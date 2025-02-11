import {Mic, Play, Plus, Subtitles} from "lucide-react";
import {Link, useLoaderData} from "react-router";

const Anime = () => {
  const anime = useLoaderData();
  const data = anime?.data?.anime;
  if (!data)
    return (
      <div className="h-[88vh] flex justify-center w-full items-center">
        <span className="loader"></span>
      </div>
    );
  return (
    <div className="min-h-screen h-screen w-full relative px-2">
      <div
        className="absolute inset-0 before:absolute before:inset-0 before:bg-black/20 blur-xl grayscale opacity-20"
        style={{
          backgroundImage: `url(${data.info.poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative z-10  flex flex-col lg:flex-row gap-10 h-full">
        <div className="lg:w-3/4 p-10 text-white flex flex-col lg:flex-row items-center lg:items-start gap-x-10 gap-y-6">
          <img
            src={data.info.poster}
            alt="poster"
            className="max-h-[250px] max-w-[180px]"
          />
          <div className="flex flex-col gap-y-6 items-center lg:items-start">
            <div className="flex items-center gap-2">
              <p className="text-sm font-light">Home</p>{" "}
              <div className="rounded-full bg-white/60 size-1"></div>
              <p className="text-sm font-light">{data.info.stats.type}</p>{" "}
              <div className="rounded-full bg-white/60 size-1"></div>
              <p className="text-sm font-light opacity-50">
                {data.info.name}
              </p>{" "}
            </div>
            <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
              {data.info.name}
            </h1>

            <div className="join join-horizontal">
              <button className="btn btn-xs join-item bg-white shadow-none text-black border-white">
                {data.info.stats.rating}
              </button>
              <button className="btn btn-xs join-item  btn-secondary shadow-none">
                {data.info.stats.quality}
              </button>
              <button className="btn btn-xs btn-success join-item shadow-none">
                <Subtitles className="size-3" /> {data.info.stats.episodes.sub}
              </button>
              <button className="btn btn-xs join-item bg-green-500 border-green-500 shadow-none">
                <Mic className="size-3" /> {data.info.stats.episodes.dub}
              </button>{" "}
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-white/60 size-1 ml-2"></div>
                <p className="text-sm font-light">
                  {data.info.stats.type}
                </p>{" "}
                <div className="rounded-full bg-white/60 size-1"></div>
                <p className="text-sm font-light ">
                  {data.info.stats.duration}
                </p>{" "}
              </div>
            </div>

            <div className="z-2 flex gap-2">
              <button className="btn btn-primary rounded-3xl bg-green-500 hover:bg-green-700 border-none text-black shadow-none">
                <Play fill="#111111" /> Watch Now
              </button>
              <button className="btn btn-primary rounded-3xl bg-white hover:bg-gray-300 text-black border-none shadow-none">
                <Plus /> Add to List
              </button>
            </div>

            <p className="text-sm font-light max-md:hidden">
              {data.info.description}
              <br />
              <br />
              AnimeHive is the best site to watch{" "}
              <span className="font-semibold">{data.info.name}</span> SUB
              online, or you can even watch{" "}
              <span className="font-semibold">{data.info.name}</span> DUB in HD
              quality. You can also find{" "}
              <span className="font-semibold">{data.moreInfo.studios}</span>{" "}
              anime on AnimeHive website.
            </p>
          </div>
        </div>

        <div className="lg:bg-white/10 bg-black/5 flex flex-col gap-y-1 justify-center p-4 lg:p-6 lg:w-1/4">
          <div className="md:hidden flex flex-col ">
            <span className="font-semibold text-sm ">Overview:</span>
            <p className="text-xs opacity-70 max-h-20 overflow-y-auto">
              {data.info.description}
            </p>
          </div>
          <p className="font-light">
            <span className="font-semibold text-sm">Japanese:</span>{" "}
            {data.moreInfo.japanese}
          </p>
          <p className="font-light">
            <span className="font-semibold text-sm">Aired:</span>{" "}
            {data.moreInfo.aired}
          </p>
          <p className="font-light">
            <span className="font-semibold text-sm">Premiered:</span>{" "}
            {data.moreInfo.premiered}
          </p>
          <p className="font-light">
            <span className="font-semibold text-sm">Duration:</span>{" "}
            {data.moreInfo.duration}
          </p>
          <p className="font-light">
            <span className="font-semibold text-sm">Status:</span>{" "}
            {data.moreInfo.status}
          </p>
          <p className="font-light">
            <span className="font-semibold text-sm">MAL Score:</span>{" "}
            {data.moreInfo.malscore}
          </p>

          <hr className="opacity-20 my-2 border" />

          <p className="font-light">
            <span className="font-semibold text-sm">Genres:</span>{" "}
            {data.moreInfo.genres.map((g: string) => (
              <Link
                to={`/genres/${g}`}
                className="btn btn-outline btn-xs rounded-full m-1 border-white/40 font-normal"
              >
                {g}
              </Link>
            ))}
          </p>

          <hr className="opacity-20 my-2 border" />

          <p className="font-light">
            <span className="font-semibold text-sm">Studios:</span>{" "}
            {data.moreInfo.studios}
          </p>
          <p className="font-light">
            <span className="font-semibold text-sm">Producers:</span>{" "}
            {data.moreInfo.producers.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Anime;

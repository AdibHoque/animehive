const WatchSkeleton = () => {
  return (
    <div className="p-4 lg:p-10 relative max-lg:bg-black">
      {/* Breadcrumbs Skeleton */}
      <div className="hidden xl:flex items-center gap-2 absolute top-[8px]">
        <div className="skeleton h-4 w-16 rounded-full" />
        <div className="rounded-full bg-white/60 size-1"></div>
        <div className="skeleton h-4 w-10 rounded-full" />
        <div className="rounded-full bg-white/60 size-1"></div>
        <div className="skeleton h-4 w-20 rounded-full opacity-50" />
      </div>

      <div className="w-full flex flex-col-reverse xl:flex-row gap-x-4">
        {/* Episode List Skeleton */}
        <div className="w-full xl:w-[25%] h-screen max-lg:border-y max-lg:border-dashed border-gray-600">
          <div className="p-4 flex w-full gap-2 items-center bg-base-300 justify-between">
            <div className="skeleton h-4 w-32 rounded-full" />
            <div className="skeleton h-8 w-24 rounded-lg" />
          </div>
          <div className="h-full bg-base-200 p-2 overflow-y-auto">
            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-5 gap-2">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="skeleton h-10 w-full rounded-md" />
              ))}
            </div>
          </div>
        </div>

        {/* Video Player Skeleton */}
        <div className="w-full xl:w-3/4 xl:h-screen h-full flex flex-col">
          <div className="skeleton relative h-[40vh] md:h-[60vh] flex items-center justify-center lg:h-screen w-full rounded-lg bg-black">
            <span className="loader2 opacity-70"></span>
          </div>

          {/* Controls Skeleton */}
          <div className="h-full lg:max-h-[136px] mt-4">
            <div className="flex justify-between items-center px-2 text-xs md:text-sm my-2">
              <div className="flex gap-3.5">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="skeleton h-4 w-16 rounded-full" />
                ))}
              </div>
              <div className="flex gap-2">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="skeleton h-8 w-8 rounded-full" />
                ))}
              </div>
            </div>

            {/* Server Switch Skeleton */}
            <div className="w-full flex flex-col lg:flex-row xl:p-2 gap-4">
              <div className="skeleton max-lg:h-24 w-full lg:w-1/4 rounded-lg bg-green-500/40" />
              <div className="bg-base-300 flex flex-col p-4 rounded-lg lg:w-3/4 w-full">
                <div className="flex gap-4">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="skeleton h-8 w-20 rounded-md" />
                  ))}
                </div>
                <hr className="border-dashed opacity-20 my-3" />
                <div className="flex gap-4">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="skeleton h-8 w-20 rounded-md" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchSkeleton;

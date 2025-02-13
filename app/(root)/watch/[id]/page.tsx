import {getEpisodeData} from "@/actions/anime.actions";
import Episodes from "@/components/Episodes";
import VideoJS from "@/components/VideoJS";
import React from "react";

type IdProps = Promise<{
  id: string;
}>;

const WatchPage = async (props: {params: IdProps}) => {
  const params = await props.params;
  const {id} = params;
  const data = await getEpisodeData(id);
  return (
    <div className="w-full flex flex-col-reverse xl:flex-row p-4 lg:p-10 ">
      <Episodes data={data} />
      <div className="w-full xl:w-3/4 h-screen">
        <VideoJS />
        <div className="bg-base-100 h-full max-h-[136px]"></div>
      </div>
    </div>
  );
};

export default WatchPage;

import {getEpisodeData} from "@/actions/anime.actions";
import WatchSkeleton from "@/components/WatchSkeleton";
import dynamic from "next/dynamic";
import React, {Suspense} from "react";
const Watch = dynamic(() => import("@/components/Watch"));

type IdProps = Promise<{
  id: string;
}>;

const WatchPage = async (props: {params: IdProps}) => {
  const params = await props.params;
  const {id} = params;
  const data = await getEpisodeData(id);
  const name = id
    .replace(/-\d+/, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <Suspense fallback={<WatchSkeleton />}>
      <Watch data={data} name={name} />
    </Suspense>
  );
};

export default WatchPage;

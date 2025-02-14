import {getEpisodeData} from "@/actions/anime.actions";
import Watch from "@/components/Watch";
import React from "react";

type IdProps = Promise<{
  id: string;
}>;

const WatchPage = async (props: {params: IdProps}) => {
  const params = await props.params;
  const {id} = params;
  const data = await getEpisodeData(id);

  return <Watch data={data} />;
};

export default WatchPage;

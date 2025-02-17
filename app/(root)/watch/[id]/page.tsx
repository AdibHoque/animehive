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
  const name = id
    .replace(/-\d+/, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return <Watch data={data} name={name} />;
};

export default WatchPage;

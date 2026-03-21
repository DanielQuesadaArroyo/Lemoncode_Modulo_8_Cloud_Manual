import * as React from "react";
import { EpisodeEntityVm, createEmptyEpisode } from "./episode-detail.vm";
import { getEpisode } from "./api";
import { mapFromApiToVm } from "./episode-detail.mapper";

export const useEpisodeDetail = (id: string) => {
  const [episodeDetail, setEpisodeDetail] =
    React.useState<EpisodeEntityVm>(createEmptyEpisode());

  const loadEpisodeDetail = React.useCallback(async () => {
    if (id) {
      try {
        const result = await getEpisode(id);
        console.log(result);
        setEpisodeDetail(mapFromApiToVm(result));
      } catch (error) {
        console.error(error);
      }
    }
  }, [id]);

  return { episodeDetail, loadEpisodeDetail };
};

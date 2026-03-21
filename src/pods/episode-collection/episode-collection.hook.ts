import * as React from "react";
import { EpisodeEntityVm } from "./episode-collection.vm";
import { getEpisodeCollection } from "./api";
import { mapFromApiToVm } from "./episode-collection.mapper";
import { mapToCollection } from "#common/mappers";

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] = React.useState<
    EpisodeEntityVm[]
  >([]);

  const loadEpisodeCollection = (page: number = 1) => {
    return getEpisodeCollection(page).then((result) => {
      setEpisodeCollection(mapToCollection(result.episodes, mapFromApiToVm));
      return result.info.pages;
    });
  };

  return { episodeCollection, loadEpisodeCollection };
};

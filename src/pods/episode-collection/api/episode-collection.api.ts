import { Result, Info } from "./episode-collection.api-model";
import axios from "axios";

export const getEpisodeCollection = async (
  page: number = 1,
): Promise<{
  episodes: Result[];
  info: Info;
}> => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/episode/?page=${page}`,
  );
  return { episodes: response.data.results, info: response.data.info };
};

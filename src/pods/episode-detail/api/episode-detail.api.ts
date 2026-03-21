import { Result } from "./episode-detail.api-model";
import axios from "axios";

export const getEpisode = async (id: string): Promise<Result> => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/episode/${id}`,
  );
  return response.data;
};

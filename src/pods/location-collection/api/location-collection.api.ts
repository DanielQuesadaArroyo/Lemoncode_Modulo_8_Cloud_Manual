import { Location, Info } from "./location-collection.api-model";
import axios from "axios";

export const getLocationCollection = async (
  page: number = 1,
  name: string = "",
): Promise<{
  locations: Location[];
  info: Info;
}> => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/location?page=${page}`,
  );
  return { locations: response.data.results, info: response.data.info };
};

import { Location } from "./location-detail.api-model";
import axios from "axios";

export const getLocation = async (id: string): Promise<Location> => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/location/${id}`,
  );
  return response.data;
};

import { Character, Info } from "./character-collection.api-model";
import axios from "axios";

let characterCollection = [];

export const getCharacterCollection = async (
  page: number = 1,
  name: string = "",
): Promise<{
  characters: Character[];
  info: Info;
}> => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`,
  );
  return { characters: response.data.results, info: response.data.info };
};

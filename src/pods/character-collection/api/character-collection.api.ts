import { Character } from "./character-collection.api-model";
import axios from "axios";

let characterCollection = [];

export const getCharacterCollection = async (): Promise<Character[]> => {
  const response = await axios.get("http://localhost:3000/api/character");
  return response.data.results;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  const response = await axios.delete(
    `http://localhost:3000/api/character/${id}`,
  );
  return response.data;
};

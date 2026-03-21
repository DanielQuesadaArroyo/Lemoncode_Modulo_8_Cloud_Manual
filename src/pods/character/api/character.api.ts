import { Character } from "./character.api-model";
import { Lookup } from "#common/models";
import axios from "axios";
import app from "#app";

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await axios.get(`http://localhost:3000/api/character/${id}`);
  return response.data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  const response = await axios.put(
    `http://localhost:3000/api/character/${character.id}`,
    character,
  );
  return true;
};

export const createCharacter = async (
  character: Character,
): Promise<boolean> => {
  const response = await axios.post(
    `http://localhost:3000/api/character`,
    character,
  );
  return true;
};

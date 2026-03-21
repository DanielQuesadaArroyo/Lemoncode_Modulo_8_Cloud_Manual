import { Character } from "./character-detail.api-model";
import axios from "axios";

// export const getCharacter = async (id: string): Promise<Character> => {
//   const response = await axios.get(
//     `https://rickandmortyapi.com/api/character/${id}`,
//   );
//   return response.data;
// };

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await axios.get(`http://localhost:3000/api/character/${id}`);
  return response.data;
};

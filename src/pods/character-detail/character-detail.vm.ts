export interface CharacterEntityVm {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  bestSentence: string;
  location: {
    name: string;
    url: string;
  };
}

export const createEmptyCharacter = (): CharacterEntityVm => ({
  id: 0,
  image: "",
  name: "",
  status: "",
  species: "",
  gender: "",
  bestSentence: "",
  location: {
    name: "",
    url: "",
  },
});

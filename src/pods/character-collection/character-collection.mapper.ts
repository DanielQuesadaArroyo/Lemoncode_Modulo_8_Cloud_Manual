import * as apiModel from "./api/character-collection.api-model";
import * as viewModel from "./character-collection.vm";

export const mapFromApiToVm = (
  character: apiModel.Character,
): viewModel.CharacterEntityVm => ({
  id: character.id,
  image: character.image,
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  bestSentence: character.bestSentence,
});

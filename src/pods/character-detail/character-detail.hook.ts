import * as React from "react";
import { CharacterEntityVm, createEmptyCharacter } from "./character-detail.vm";
import { getCharacter } from "./api";
import { mapFromApiToVm } from "./character-detail.mapper";

export const useCharacterDetail = (id: string) => {
  const [characterDetail, setCharacterDetail] =
    React.useState<CharacterEntityVm>(createEmptyCharacter());

  const loadCharacterDetail = React.useCallback(async () => {
    if (id) {
      try {
        const result = await getCharacter(id);
        console.log(result);
        setCharacterDetail(mapFromApiToVm(result));
      } catch (error) {
        console.error(error);
      }
    }
  }, [id]);

  return { characterDetail, loadCharacterDetail };
};

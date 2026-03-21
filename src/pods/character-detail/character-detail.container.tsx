import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCharacterDetail } from "./character-detail.hook";
import { CharacterDetail } from "./components/character-detail.component";

export const CharacterDetailContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { characterDetail, loadCharacterDetail } = useCharacterDetail(id);
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterDetail();
  }, [loadCharacterDetail]);

  return (
    <CharacterDetail character={characterDetail} onBack={() => navigate(-1)} />
  );
};

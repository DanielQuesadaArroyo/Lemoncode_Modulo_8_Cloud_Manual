import * as React from "react";
import { useNavigate } from "react-router-dom";
import { linkRoutes } from "#core/router";
import { deleteCharacter } from "./api";
import { useCharacterCollection } from "./character-collection.hook";
import { CharacterCollectionComponent } from "./character-collection.component";

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: number) => {
    navigate(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteCharacter(id);
      loadCharacterCollection();
    } catch (error) {
      console.error("Error al eliminar el personaje: ", error);
      alert("Error al eliminar el personaje");
    }
  };

  const handleDetail = (id: number) => {
    navigate(linkRoutes.characterDetail(id));
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onDetail={handleDetail}
    />
  );
};

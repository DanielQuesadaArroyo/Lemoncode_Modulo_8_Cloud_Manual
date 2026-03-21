import * as React from "react";
import { useNavigate } from "react-router-dom";
import { linkRoutes } from "#core/router";
import { useCharacterCollection } from "./character-collection.hook";
import { CharacterCollectionComponent } from "./character-collection.component";

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [name, setName] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection(page, name).then(setTotalPages);
  }, [page, name]);

  const handleDetail = (id: number) => {
    navigate(linkRoutes.characterDetail(id));
  };

  return (
    <>
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onDetail={handleDetail}
        page={page}
        totalPages={totalPages || 1}
        onChangePage={(event, value) => setPage(value)}
        searchText={name}
        onChangeName={(name) => {
          setName(name);
          setPage(1);
        }}
      />
    </>
  );
};

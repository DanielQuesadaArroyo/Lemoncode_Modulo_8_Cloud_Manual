import * as React from "react";
import { CharacterEntityVm } from "./character-collection.vm";
import { CharacterCard } from "./components/character-card.component";
import { BasicPagination } from "#common/components/pagination/basic-pagination.component";
import * as classes from "./character-collection.styles";
import { SearchTextField } from "#common/components/search/search-textfield.component";
import { switchRoutes } from "#core/router";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  characterCollection: CharacterEntityVm[];
  onDetail: (id: number) => void;
  page: number;
  totalPages: number;
  onChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
  searchText: string;
  onChangeName: (name: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props,
) => {
  const navigate = useNavigate();
  const {
    characterCollection,
    onDetail,
    page,
    totalPages,
    onChangePage,
    searchText,
    onChangeName,
  } = props;

  return (
    <div className={classes.root}>
      <div>
        <Button
          variant="contained"
          onClick={() => navigate(switchRoutes.locationCollection)}
        >
          Locations
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => navigate(switchRoutes.episodeCollection)}
        >
          Episodes
        </Button>
      </div>
      <div>
        <SearchTextField value={searchText} onChange={onChangeName} />
      </div>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onDetail={onDetail} />
          </li>
        ))}
      </ul>

      <BasicPagination
        page={page}
        totalPages={totalPages}
        onChange={onChangePage}
      />
    </div>
  );
};

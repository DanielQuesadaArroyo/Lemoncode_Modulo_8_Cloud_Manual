import * as React from "react";
import { EpisodeEntityVm } from "./episode-collection.vm";
import { EpisodeCard } from "./components/episode-card.component";
import { BasicPagination } from "#common/components/pagination/basic-pagination.component";
import * as classes from "./episode-collection.styles";
import { useNavigate } from "react-router-dom";

interface Props {
  episodeCollection: EpisodeEntityVm[];
  onDetail: (id: number) => void;
  page: number;
  totalPages: number;
  onChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const EpisodeCollectionComponent: React.FunctionComponent<Props> = (
  props,
) => {
  const navigate = useNavigate();
  const { episodeCollection, onDetail, page, totalPages, onChangePage } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {episodeCollection.map((episode) => (
          <li key={episode.id}>
            <EpisodeCard episode={episode} onDetail={onDetail} />
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

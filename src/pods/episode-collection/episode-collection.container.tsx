import * as React from "react";
import { useNavigate } from "react-router-dom";
import { linkRoutes } from "#core/router";
import { useEpisodeCollection } from "./episode-collection.hook";
import { EpisodeCollectionComponent } from "./episode-collection.component";

export const EpisodeCollectionContainer = () => {
  const { episodeCollection, loadEpisodeCollection } = useEpisodeCollection();
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const navigate = useNavigate();

  React.useEffect(() => {
    loadEpisodeCollection(page).then(setTotalPages);
  }, [page]);

  const handleDetail = (id: number) => {
    navigate(linkRoutes.episodeDetail(id));
  };

  return (
    <>
      <EpisodeCollectionComponent
        episodeCollection={episodeCollection}
        onDetail={handleDetail}
        page={page}
        totalPages={totalPages || 1}
        onChangePage={(event, value) => setPage(value)}
      />
    </>
  );
};

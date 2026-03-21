import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEpisodeDetail } from "./episode-detail.hook";
import { EpisodeDetail } from "./components/episode-detail.component";

export const EpisodeDetailContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { episodeDetail, loadEpisodeDetail } = useEpisodeDetail(id);
  const navigate = useNavigate();

  React.useEffect(() => {
    loadEpisodeDetail();
  }, [loadEpisodeDetail]);

  return <EpisodeDetail episode={episodeDetail} onBack={() => navigate(-1)} />;
};

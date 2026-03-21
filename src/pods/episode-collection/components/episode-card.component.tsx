import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { EpisodeEntityVm } from "../episode-collection.vm";

interface Props {
  episode: EpisodeEntityVm;
  onDetail: (id: number) => void;
}

export const EpisodeCard: React.FunctionComponent<Props> = (props) => {
  const { episode, onDetail } = props;

  return (
    <Card style={{ cursor: "pointer" }} onClick={() => onDetail(episode.id)}>
      <CardHeader title={episode.name} subheader={episode.air_date} />
      <CardContent>
        <div>
          <Typography variant="subtitle1" gutterBottom>
            {episode.episode}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { linkRoutes } from "#core/router";
import { EpisodeEntityVm } from "../episode-detail.vm";

interface Props {
  episode: EpisodeEntityVm;
  onBack: () => void;
}

export const EpisodeDetail: React.FunctionComponent<Props> = (props) => {
  const { episode, onBack } = props;

  return (
    <Card sx={{ maxWidth: 400, margin: "0 auto", padding: 2 }}>
      <CardHeader title={episode.name} />
      <CardContent>
        <div>
          <Typography variant="subtitle1" gutterBottom>
            Episodio: {episode.episode}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Fecha de emisión: {episode.air_date}
          </Typography>
          Personajes:
          {episode.characters.map((character) => {
            const id = character.split("/").pop();
            return (
              <Typography
                key={id}
                variant="subtitle1"
                gutterBottom
              >
                <MuiLink
                  component={Link}
                  to={linkRoutes.characterDetail(id)}
                >
                  {id}
                </MuiLink>
              </Typography>
            );
          })}
        </div>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button onClick={onBack} variant="contained" color="primary">
          Volver
        </Button>
      </CardActions>
    </Card>
  );
};

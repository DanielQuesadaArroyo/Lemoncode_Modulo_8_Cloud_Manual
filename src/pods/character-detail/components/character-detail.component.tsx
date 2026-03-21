import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { linkRoutes } from "#core/router";
import { CharacterEntityVm } from "../character-detail.vm";

interface Props {
  character: CharacterEntityVm;
  onBack: () => void;
}

export const CharacterDetail: React.FunctionComponent<Props> = (props) => {
  const { character, onBack } = props;

  return (
    <Card sx={{ maxWidth: 400, margin: "0 auto", padding: 2 }}>
      <CardHeader
        title={character.name}
        subheader={`ID: ${character.id} | ${character.species}`}
      />

      <CardContent>
        {character.image && (
          <CardMedia
            component="img"
            height="250"
            image={character.image}
            alt={character.name}
            sx={{ objectFit: "contain", borderRadius: 1 }}
          />
        )}
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Información del personaje
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          <strong>Estado:</strong> {character.status}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          <strong>Género:</strong> {character.gender}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          <strong>Localización:</strong>{" "}
          {character.location.url ? (
            <MuiLink
              component={Link}
              to={linkRoutes.locationDetail(
                character.location.url.split("/").pop() || "",
              )}
            >
              {character.location.name}
            </MuiLink>
          ) : (
            character.location.name
          )}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "center" }}>
        <Button onClick={onBack} variant="contained" color="primary">
          Volver
        </Button>
      </CardActions>
    </Card>
  );
};

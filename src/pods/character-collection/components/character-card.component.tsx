import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CharacterEntityVm } from "../character-collection.vm";
import * as classes from "./character-card.styles";

interface Props {
  character: CharacterEntityVm;
  onDetail: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onDetail } = props;

  return (
    <Card>
      <CardHeader title={character.name} subheader={character.status} />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: "56.25%", cursor: "pointer" }}
            onClick={() => onDetail(character.id)}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.species}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

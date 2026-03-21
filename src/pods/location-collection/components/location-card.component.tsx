import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { LocationEntityVm } from "../location-collection.vm";
import * as classes from "./location-card.styles";

interface Props {
  location: LocationEntityVm;
}

export const LocationCard: React.FunctionComponent<Props> = (props) => {
  const { location } = props;

  return (
    <Card>
      <CardHeader title={location.name} subheader={location.type} />
      <CardContent>
        <div className={classes.content}>
          <Typography variant="subtitle1" gutterBottom>
            {location.dimension !== "unknown"
              ? location.dimension
              : "Unknown dimension"}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

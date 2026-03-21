import * as React from "react";
import Button from "@mui/material/Button";
import { LocationEntityVm } from "../location-detail.vm";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

interface Props {
  location: LocationEntityVm;
  onBack: () => void;
}

export const LocationDetail: React.FunctionComponent<Props> = (props) => {
  const { location, onBack } = props;

  return (
    <Card sx={{ maxWidth: 400, margin: "0 auto", padding: 2 }}>
      <CardHeader title={location.name} />
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Información de la localización:
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          <strong>ID:</strong> {location.id}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          <strong>Tipo:</strong> {location.type}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          <strong>Dimensión:</strong>{" "}
          {location.dimension !== "unknown"
            ? location.dimension
            : "Unknown dimension"}
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

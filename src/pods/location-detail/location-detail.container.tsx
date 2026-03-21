import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocationDetail } from "./location-detail.hook";
import { LocationDetail } from "./components/location-detail.component";

export const LocationDetailContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { locationDetail, loadLocationDetail } = useLocationDetail(id);
  const navigate = useNavigate();

  React.useEffect(() => {
    loadLocationDetail();
  }, [loadLocationDetail]);

  return (
    <LocationDetail location={locationDetail} onBack={() => navigate(-1)} />
  );
};

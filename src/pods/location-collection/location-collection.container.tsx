import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useLocationCollection } from "./location-collection.hook";
import { LocationCollectionComponent } from "./location-collection.component";

export const LocationCollectionContainer = () => {
  const { locationCollection, loadLocationCollection } =
    useLocationCollection();
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  React.useEffect(() => {
    loadLocationCollection(page).then(setTotalPages);
  }, [page]);

  return (
    <>
      <LocationCollectionComponent
        locationCollection={locationCollection}
        page={page}
        totalPages={totalPages || 1}
        onChangePage={(event, value) => setPage(value)}
      />
    </>
  );
};

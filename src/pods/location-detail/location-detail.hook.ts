import * as React from "react";
import { LocationEntityVm, createEmptyLocation } from "./location-detail.vm";
import { getLocation } from "./api";
import { mapFromApiToVm } from "./location-detail.mapper";

export const useLocationDetail = (id: string) => {
  const [locationDetail, setLocationDetail] = React.useState<LocationEntityVm>(
    createEmptyLocation(),
  );

  const loadLocationDetail = React.useCallback(async () => {
    if (id) {
      try {
        const result = await getLocation(id);
        setLocationDetail(mapFromApiToVm(result));
      } catch (error) {
        console.error(error);
      }
    }
  }, [id]);

  return { locationDetail, loadLocationDetail };
};

import * as React from "react";
import { LocationEntityVm } from "./location-collection.vm";
import { getLocationCollection } from "./api";
import { mapFromApiToVm } from "./location-collection.mapper";
import { mapToCollection } from "#common/mappers";

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] = React.useState<
    LocationEntityVm[]
  >([]);

  const loadLocationCollection = (page: number = 1, name: string = "") => {
    return getLocationCollection(page, name).then((result) => {
      setLocationCollection(mapToCollection(result.locations, mapFromApiToVm));
      return result.info.pages;
    });
  };

  return { locationCollection, loadLocationCollection };
};

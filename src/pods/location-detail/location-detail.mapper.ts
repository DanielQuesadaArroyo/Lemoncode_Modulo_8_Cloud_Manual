import * as apiModel from "./api/location-detail.api-model";
import * as viewModel from "./location-detail.vm";

export const mapFromApiToVm = (
  location: apiModel.Location,
): viewModel.LocationEntityVm => ({
  id: location.id,
  image: "",
  name: location.name,
  type: location.type,
  dimension: location.dimension,
  residents: location.residents,
});

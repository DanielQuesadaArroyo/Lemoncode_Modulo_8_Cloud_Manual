import * as apiModel from "./api/episode-detail.api-model";
import * as viewModel from "./episode-detail.vm";

export const mapFromApiToVm = (
  episode: apiModel.Result,
): viewModel.EpisodeEntityVm => ({
  id: episode.id,
  name: episode.name,
  air_date: episode.air_date,
  episode: episode.episode,
  characters: episode.characters,
  url: episode.url,
  created: episode.created,
});

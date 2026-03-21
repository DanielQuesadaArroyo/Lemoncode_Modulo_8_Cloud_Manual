export interface EpisodeEntityVm {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export const createEmptyEpisode = (): EpisodeEntityVm => ({
  id: 0,
  name: "",
  air_date: "",
  episode: "",
  characters: [],
  url: "",
  created: "",
});

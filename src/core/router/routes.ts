import { generatePath } from "react-router";

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  characterDetail: string;
  episodeCollection: string;
  episodeDetail: string;
  locationCollection: string;
  locationDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  characterCollection: "/characters",
  characterDetail: "/characters/:id/detail",
  locationCollection: "/locations",
  locationDetail: "/locations/:id/detail",
  episodeCollection: "/episodes",
  episodeDetail: "/episodes/:id/detail",
};

type NavigationFunction = (id: number | string) => string;

interface LinkRoutes extends Omit<
  SwitchRoutes,
  "characterDetail" | "locationDetail" | "episodeDetail"
> {
  characterDetail: NavigationFunction;
  locationDetail: NavigationFunction;
  episodeDetail: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  characterDetail: (id) =>
    generatePath(switchRoutes.characterDetail, { id: String(id) }),
  locationDetail: (id) =>
    generatePath(switchRoutes.locationDetail, { id: String(id) }),
  episodeDetail: (id) =>
    generatePath(switchRoutes.episodeDetail, { id: String(id) }),
};

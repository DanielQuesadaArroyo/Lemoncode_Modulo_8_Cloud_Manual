import { generatePath } from "react-router";

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  createCharacter: string;
  editCharacter: string;
  characterDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  characterCollection: "/characters",
  createCharacter: "/characters/create",
  editCharacter: "/characters/:id",
  characterDetail: "/characters/:id/detail",
};

type NavigationFunction = (id: number | string) => string;

interface LinkRoutes extends Omit<
  SwitchRoutes,
  "editCharacter" | "characterDetail"
> {
  editCharacter: NavigationFunction;
  characterDetail: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) =>
    generatePath(switchRoutes.editCharacter, { id: String(id) }),
  characterDetail: (id) =>
    generatePath(switchRoutes.characterDetail, { id: String(id) }),
};

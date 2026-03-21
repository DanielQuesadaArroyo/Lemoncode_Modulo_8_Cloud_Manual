import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { switchRoutes } from "./routes";
import {
  CharacterCollectionScene,
  CharacterDetailScene,
  LocationCollectionScene,
  LocationDetailScene,
  EpisodeCollectionScene,
  EpisodeDetailScene,
} from "#scenes";

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.characterCollection}
          element={<CharacterCollectionScene />}
        />
        <Route
          path={switchRoutes.characterDetail}
          element={<CharacterDetailScene />}
        />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.characterCollection} />}
        />
        <Route
          path={switchRoutes.locationCollection}
          element={<LocationCollectionScene />}
        />
        <Route
          path={switchRoutes.locationDetail}
          element={<LocationDetailScene />}
        />
        <Route
          path={switchRoutes.episodeCollection}
          element={<EpisodeCollectionScene />}
        />
        <Route
          path={switchRoutes.episodeDetail}
          element={<EpisodeDetailScene />}
        />
      </Routes>
    </HashRouter>
  );
};

import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomeView = lazy(() => import("./home/home.view"));
const GameView = lazy(() => import("./game/game.view"));

export const AppRouting: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/game" element={<GameView />} />
    </Routes>
  );
};

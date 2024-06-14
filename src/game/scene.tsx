import { FC } from "react";
import { Ground } from "./components/ground.component";
import { Physics } from "@react-three/rapier";
import { Player } from "./components/player/player.component";
import { Box } from "./components/box.component";
import { Vector3 } from "three";
import { Circle } from "./components/circle.component";

export const Scene: FC = (): JSX.Element => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <Physics debug gravity={[0, -20, 0]}>
        <Ground />
        <group>
          <Box position={[2, 0.5, -10] as unknown as Vector3} />
          <Box position={[-3, 0.3, -9] as unknown as Vector3} />
          <Box position={[0, 0.3, -10] as unknown as Vector3} />
        </group>
        <group>
          <Circle position={[0, -5, -10] as unknown as Vector3} />
        </group>
        <Player />
      </Physics>
    </>
  );
};

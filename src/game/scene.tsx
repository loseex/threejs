import { FC } from "react";
import { Ground } from "./components/ground.component";
import { PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Box } from "./components/box.component";

export const Scene: FC = (): JSX.Element => {
  return (
    <>
      <PointerLockControls />
      <ambientLight intensity={1.5} />
      <Physics debug gravity={[0, -20, 0]}>
        <Ground />
        <Box />
      </Physics>
    </>
  );
};

import { RigidBody } from "@react-three/rapier";
import { FC } from "react";

import boxTexture from "/box.jpg";
import { useTexture } from "@react-three/drei";

export const Box: FC = (): JSX.Element => {
  const texture = useTexture(boxTexture);

  return (
    <RigidBody>
      <mesh position={[0, 3, -5]} scale={[3, 3, 3]}>
        <boxGeometry />
        <meshStandardMaterial color="white" map={texture} />
      </mesh>
    </RigidBody>
  );
};
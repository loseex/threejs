import { RigidBody } from "@react-three/rapier";
import { FC } from "react";
import { useTexture } from "@react-three/drei";

import boxTexture from "/box.jpg";

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

import { RigidBody } from "@react-three/rapier";
import { FC } from "react";
import { useTexture } from "@react-three/drei";

import boxTexture from "/box.jpg";
import { Vector3 } from "three";

export const Box: FC<{ position: Vector3 }> = ({ position }): JSX.Element => {
  const texture = useTexture(boxTexture);

  return (
    <RigidBody mass={10}>
      <mesh position={position} scale={[3, 3, 3]}>
        <boxGeometry />
        <meshStandardMaterial color="#f7f7f7" map={texture} />
      </mesh>
    </RigidBody>
  );
};

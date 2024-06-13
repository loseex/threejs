import { useTexture } from "@react-three/drei";
import { FC } from "react";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

import floorTexture from "/grid.png";

export const Ground: FC = (): JSX.Element => {
  const texture = useTexture(floorTexture);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <RigidBody>
      <mesh position={[0, -5, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[250, 250]} />
        <meshStandardMaterial color="gray" map={texture} />
      </mesh>
    </RigidBody>
  );
};

import { RigidBody } from "@react-three/rapier";
import { FC } from "react";
import { Vector3 } from "three";

export const Circle: FC<{ position: Vector3 }> = ({
  position,
}): JSX.Element => {
  return (
    <RigidBody mass={10} type="fixed" colliders={false}>
      <mesh position={position} scale={[4, 4, 4]}>
        <sphereGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </RigidBody>
  );
};

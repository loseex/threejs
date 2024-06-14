import { PerspectiveCamera, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { FC, useRef } from "react";
import { Controls } from "@/game";

const JUMP_FORCE = 500;
const MOVEMENT_SPEED = 20;
const MAX_VEL = 40;

export const Player: FC = (): JSX.Element => {
  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );

  const playerRef = useRef<any>(null);
  const IsOnGround = useRef<boolean>(true);

  useFrame(() => {
    const impulse = { x: 0, y: 0, z: 0 };
    const linvel = playerRef.current.linvel();

    if (jumpPressed && IsOnGround.current) {
      impulse.y += JUMP_FORCE;
      IsOnGround.current = false;
    }
    if (rightPressed && linvel.x < MAX_VEL) {
      impulse.x += MOVEMENT_SPEED;
    }
    if (leftPressed && linvel.x > -MAX_VEL) {
      impulse.x -= MOVEMENT_SPEED;
    }
    if (backPressed && linvel.z < MAX_VEL) {
      impulse.z += MOVEMENT_SPEED;
    }
    if (forwardPressed && linvel.z > -MAX_VEL) {
      impulse.z -= MOVEMENT_SPEED;
    }

    playerRef.current.applyImpulse(impulse, true);
  });

  return (
    <group>
      <RigidBody
        ref={playerRef}
        enabledRotations={[false, false, false]}
        onCollisionEnter={() => {
          IsOnGround.current = true;
        }}
        colliders={false}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 10, 20]}
          rotation={[-0.5, 0, 0]}
          fov={70}
        />
        <group>
          <mesh scale={3}>
            <CuboidCollider
              args={[0.13, 0.13, 0.13]}
              scale={4}
              onCollisionEnter={() => {
                IsOnGround.current = true;
              }}
            />
            <boxGeometry />
            <meshStandardMaterial color="white" />
          </mesh>
        </group>
      </RigidBody>
    </group>
  );
};

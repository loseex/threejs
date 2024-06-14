import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Scene } from "./scene";
import { KeyboardControls, Sky } from "@react-three/drei";
import { useMemo } from "react";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

export default function Game(): JSX.Element {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );

  return (
    <KeyboardControls map={map}>
      <Canvas className="*:w-full *:min-h-screen" camera={{ fov: 60 }}>
        <Physics debug>
          <Sky sunPosition={[100, 20, 100]} />
          <Scene />
        </Physics>
      </Canvas>
    </KeyboardControls>
  );
}

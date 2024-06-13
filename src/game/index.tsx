import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Scene } from "./scene";
import { Sky } from "@react-three/drei";

export default function Game(): JSX.Element {
  return (
    <Canvas className="*:w-full *:min-h-screen" camera={{ fov: 60 }}>
      <Physics debug>
        <Sky sunPosition={[100, 20, 100]} />
        <Scene />
      </Physics>
    </Canvas>
  );
}

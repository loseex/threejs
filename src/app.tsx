import { FC, useLayoutEffect, useRef } from "react";

export const App: FC = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {}, []);

  return <canvas ref={canvasRef} />;
};

import { FC, Suspense, useCallback, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Figure from "../Figure/Figure";
import { ICursor, ISizes } from "../../models/FigureModel";
import "./threejs.scss";

const sizes: ISizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const cursor: ICursor = {
  x: 0,
  y: 0,
};

const ThreeJS: FC = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = event.clientY / sizes.height - 0.5;
  }, []);

  const handleOrientation = useCallback((event: DeviceOrientationEvent) => {
    if (event.gamma && event.beta) {
      cursor.x = event.gamma * 0.03;
      cursor.y = event.beta * 0.01;
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    if (isMobile) {
      window.addEventListener("deviceorientation", handleOrientation, true);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [handleMouseMove, handleOrientation]); // eslint-disable-line

  return (
    <Suspense fallback={null}>
      <Canvas className="threejs" dpr={window.devicePixelRatio}>
        <ambientLight />
        <Figure sizes={sizes} cursor={cursor} />
      </Canvas>
    </Suspense>
  );
};

export default ThreeJS;

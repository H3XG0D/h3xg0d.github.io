import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { useFrame, useLoader } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import { ICursor, ISizes } from "../../models/FigureModel";
import { FC, memo, useMemo, useRef } from "react";

export interface IFigureProps {
  sizes: ISizes;
  cursor: ICursor;
}

const getRandNum = (max: number) => {
  return Math.floor(Math.random() * max) + 1;
};

const Figure: FC<IFigureProps> = (props) => {
  const { sizes, cursor } = props;
  const camera = useRef<PerspectiveCamera | null>(null);
  const font = useLoader(FontLoader, "/fonts/arial.json");
  const mesh = useRef<THREE.Mesh | null>(null);
  const material = new THREE.MeshStandardMaterial({
    color: "white",
    wireframe: true,
    transparent: true,
    opacity: 0,
  });

  const options = useMemo(
    () => ({
      font: font,
      size: 2,
      height: 0.3,
      curveSegments: 2,
      bevelEnabled: true,
      bevelThickness: 0,
      bevelSize: 0.001,
      bevelOffset: 0,
      bevelSegments: 1,
    }),
    [font]
  );

  const figures = useMemo(
    () => [
      {
        id: 1,
        name: "CUBE",
        geometry: new THREE.BoxGeometry(1, 1, 1),
        scale: 2,
        rotation: 0.01,
      },
      {
        id: 2,
        name: "POLYGONAL SPHERE",
        geometry: new THREE.IcosahedronGeometry(1, 1),
        scale: 1.5,
        rotation: 0.006,
      },
      {
        id: 3,
        name: "RHOMBUS",
        geometry: new THREE.OctahedronGeometry(1, 0),
        scale: 1.5,
        rotation: 0.01,
      },
      {
        id: 4,
        name: "TORUS KNOT",
        geometry: new THREE.TorusKnotGeometry(1, 0.1, 160, 10, 3, 5),
        scale: 1,
        rotation: 0.01,
      },
      {
        id: 5,
        name: "SPHERE",
        geometry: new THREE.SphereGeometry(1, 24, 16),
        scale: 1.5,
        rotation: 0.006,
      },
      {
        id: 6,
        name: "TETRAHEDRON",
        geometry: new THREE.TetrahedronGeometry(1, 0),
        scale: 1.8,
        rotation: 0.01,
      },
      {
        id: 7,
        name: "POLYGONAL TORUS",
        geometry: new THREE.TorusGeometry(25, 8, 4, 4),
        scale: 0.05,
        rotation: 0.01,
      },
      {
        id: 8,
        name: ":D",
        geometry: new TextGeometry(":D", options).center(),
        scale: 1.2,
        rotation: 0.01,
      },
      {
        id: 9,
        name: "(•_•)",
        geometry: new TextGeometry("(•_•)", options).center(),
        scale: 0.55,
        rotation: 0.01,
      },
      {
        id: 10,
        name: "D:",
        geometry: new TextGeometry("D:", options).center(),
        scale: 1.2,
        rotation: 0.01,
      },
      {
        id: 11,
        name: "H",
        geometry: new TextGeometry("H", options).center(),
        scale: 1.5,
        rotation: 0.01,
      },
      {
        id: 12,
        name: "( ͡° ͜ʖ ͡°)",
        geometry: new TextGeometry("( ͡° ͜ʖ ͡°)", options).center(),
        scale: 0.4,
        rotation: 0.01,
      },
      {
        id: 13,
        name: "if",
        geometry: new TextGeometry("if", options).center(),
        scale: 1.3,
        rotation: 0.01,
      },
      {
        id: 14,
        name: "ʕ•ᴥ•ʔ",
        geometry: new TextGeometry("ʕ•ᴥ•ʔ", options).center(),
        scale: 0.5,
        rotation: 0.01,
      },
      {
        id: 15,
        name: "( ͠° ͟ل ͡°)",
        geometry: new TextGeometry("( ͠° ͟ل ͡°)", options).center(),
        scale: 0.4,
        rotation: 0.01,
      },
      {
        id: 16,
        name: "else",
        geometry: new TextGeometry("else", options).center(),
        scale: 0.6,
        rotation: 0.01,
      },
      {
        id: 17,
        name: "┼",
        geometry: new TextGeometry("┼", options).center(),
        scale: 1,
        rotation: 0.01,
      },
      {
        id: 18,
        name: "☺",
        geometry: new TextGeometry("☺", options).center(),
        scale: 1.5,
        rotation: 0.01,
      },
      {
        id: 19,
        name: "☼",
        geometry: new TextGeometry("☼", options).center(),
        scale: 1.1,
        rotation: 0.01,
      },
      {
        id: 20,
        name: "░",
        geometry: new TextGeometry("░", options).center(),
        scale: 1.1,
        rotation: 0.01,
      },
      {
        id: 21,
        name: "ʘ",
        geometry: new TextGeometry("ʘ", options).center(),
        scale: 1.1,
        rotation: 0.01,
      },
      {
        id: 22,
        name: "Ξ",
        geometry: new TextGeometry("Ξ", options).center(),
        scale: 1.1,
        rotation: 0.01,
      },
      {
        id: 23,
        name: "҉",
        geometry: new TextGeometry("҉", options).center(),
        scale: 1.1,
        rotation: 0.01,
      },
      {
        id: 24,
        name: "҈",
        geometry: new TextGeometry("҈", options).center(),
        scale: 1.1,
        rotation: 0.01,
      },
      {
        id: 25,
        name: "◌",
        geometry: new TextGeometry("◌", options).center(),
        scale: 2,
        rotation: 0.01,
      },
    ],
    [options]
  );
  let geometry;
  let scale = 1;
  let rotation = 0.01;

  const index = getRandNum(figures.length + 1);
  const randomFigure = figures[index];
  if (randomFigure) {
    geometry = randomFigure.geometry;
    scale = randomFigure.scale;
    rotation = randomFigure.rotation;
  }

  let previousTime = 0;
  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    if (material.opacity < 0.3) {
      material.opacity = material.opacity + Math.sin(elapsedTime) * 0.01;
    }

    if (mesh.current) {
      mesh.current.position.y = Math.sin(elapsedTime) * 0.1;
      mesh.current.rotation.y += rotation;
    }

    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;
    if (camera.current && mesh.current && mesh.current.position) {
      const parallaxX = cursor.x * 0.5;
      const parallaxY = -cursor.y * 0.5;
      camera.current.position.x +=
        (parallaxX - camera.current.position.x) * 5 * deltaTime;
      camera.current.position.y +=
        (parallaxY - camera.current.position.y) * 5 * deltaTime;
    }
  });

  return (
    <perspectiveCamera
      ref={camera}
      fov={60}
      aspect={sizes.width / sizes.height}
      near={0.1}
      far={80}
    >
      <mesh
        position={[0, 0, 0]}
        ref={mesh}
        geometry={geometry}
        material={material}
        scale={scale}
      />
    </perspectiveCamera>
  );
};

export default memo(Figure);

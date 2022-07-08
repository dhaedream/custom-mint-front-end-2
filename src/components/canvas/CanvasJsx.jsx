import React from "react";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Alien from "../alien/Alien";

const CanvasJsx = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight />
        <spotLight
          intensity={0.9}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Alien />
      </Suspense>
    </Canvas>
  );
};

export default CanvasJsx;

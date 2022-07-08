import React from "react";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Alien from "../alien/Alien";

const CanvasJsx = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight />
        <Alien />
      </Suspense>
    </Canvas>
  );
};

export default CanvasJsx;

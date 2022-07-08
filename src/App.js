import "./index.css";
// import { Suspense, useRef, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import Alien from "./components/alien/Alien";
import CanvasJsx from "./components/canvas/CanvasJsx";

function App() {
  return (
    <div className="App">
      {/* <CanvasJsx />
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <Alien />
        </Suspense>
      </Canvas> */}
      <CanvasJsx />
    </div>
  );
}

export default App;

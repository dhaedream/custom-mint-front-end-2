import "./index.css";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
import Alien from "./components/alien/Alien";

function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <Alien />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;

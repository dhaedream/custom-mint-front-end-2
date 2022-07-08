import "./index.css";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.material_10}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.material_9}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.material_8}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.material_7}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.material_6}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.material_6}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.material_5}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.material_4}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.material_4}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.material_4}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.material_4}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.material_4}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.material_3}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials.material_2}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials.material_1}
        />
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_30.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  );
}

function App() {
  const ref = useRef();
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;

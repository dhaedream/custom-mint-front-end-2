import React from "react";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Alien = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={2}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.material_10}
        />
        {/* aura  */}
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.material_9}
          material-color={"red"}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.material_8}
          material-color={"red"}
        />
        {/* aura  */}
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.material_7}
          material-color={"red"}
        />
        {/* body/arms  */}
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.material_6}
          material-color={"white"}
        />
        {/* body  */}
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.material_6}
          material-color={"white"}
        />
        {/* eyes  */}
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.material_5}
          material-color={"black"}
        />
        {/* hair  */}
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.material_4}
          material-color={"white"}
        />
        {/* hair  */}
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.material_4}
          material-color={"green"}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.material_4}
          material-color={"white"}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.material_4}
          material-color={"white"}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.material_4}
          material-color={"white"}
        />
        {/* antenna tips  */}
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.material_3}
          material-color={"white"}
        />
        {/* idk  */}
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials.material_2}
          material-color={"green"}
        />
        {/* antenna sticks  */}
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials.material_1}
          material-color={"white"}
        />
        {/* face */}
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials.material_0}
          material-color={"white"}
        />
        {/* face  */}
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials.material_0}
          material-color={"white"}
        />
        {/* face */}
        <mesh
          geometry={nodes.Object_30.geometry}
          material={materials.material_0}
          material-color={"white"}
        />
      </group>
    </group>
  );
};

export default Alien;

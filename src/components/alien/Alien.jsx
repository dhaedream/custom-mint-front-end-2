import React from "react";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Alien = ({ ...props }) => {
  console.log({ ...props });
  const group = useRef();
  const { nodes, materials } = useGLTF("/scene.gltf");
  console.log({ ...props.aura });
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
          material-color={props.aura}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.material_8}
          material-color={props.aura}
        />
        {/* aura  */}
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.material_7}
          material-color={props.aura}
        />
        {/* body/arms  */}
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.material_6}
          material-color={props.body}
        />
        {/* body  */}
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.material_6}
          material-color={props.body}
        />
        {/* eyes  */}
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.material_5}
          material-color={"#000000"}
        />
        {/* hair  */}
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.material_4}
          material-color={props.hair}
        />
        {/* hair  */}
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.material_4}
          material-color={props.hair}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.material_4}
          material-color={props.hex}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.material_4}
          material-color={props.hex}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.material_4}
          material-color={props.hex}
        />
        {/* antenna tips  */}
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.material_3}
          material-color={props.antenna}
        />
        {/* idk  */}
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials.material_2}
        />
        {/* antenna sticks  */}
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials.material_1}
          material-color={props.antenna}
        />
        {/* face */}
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials.material_0}
          material-color={props.face}
        />
        {/* face  */}
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials.material_0}
          material-color={props.face}
        />
        {/* face */}
        <mesh
          geometry={nodes.Object_30.geometry}
          material={materials.material_0}
          material-color={props.face}
        />
      </group>
    </group>
  );
};

export default Alien;

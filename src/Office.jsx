/*
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cs-office-with-real-light-7321fe525c854b87944c78af5f009128
*/

import { useGLTF } from "@react-three/drei";

export default function Office(props) {
  const { nodes, materials } = useGLTF("/office-com.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass_Glass_Clear_0.geometry}
        material={materials.Glass_Clear}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1_part1_0.geometry}
        material={materials.part1}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2_part2_0.geometry}
        material={materials.part2}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3_part3_0.geometry}
        material={materials.part3}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part4_part4_0.geometry}
        material={materials.part4}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part5_part5_0.geometry}
        material={materials.part5}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part6_part6_0.geometry}
        material={materials.part6}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part7_part7_0.geometry}
        material={materials.part7}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part8_part8_0.geometry}
        material={materials.part8}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part9_part9_0.geometry}
        material={materials.part9}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part10_part10_0.geometry}
        material={materials.part10}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part11_part11_0.geometry}
        material={materials.part11}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part12_part12_0.geometry}
        material={materials.part12}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part13_part13_0.geometry}
        material={materials.part13}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part14_part14_0.geometry}
        material={materials.part14}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
    </group>
  );
}

useGLTF.preload("/office-com.glb");

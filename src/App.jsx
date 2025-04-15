import { getProject, val } from "@theatre/core";
import {
  PerspectiveCamera,
  SheetProvider,
  useCurrentSheet,
} from "@theatre/r3f";
import { editable as e } from "@theatre/r3f";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import Experience from "./Experience";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, ScrollControls } from "@react-three/drei";
import * as THREE from "three";

import projectState from "./assets/Project.theatre-project-state_final.json";

const isProd = import.meta.env.MODE === "production";

const project = getProject(
  "Project",
  isProd
    ? {
        state: projectState,
      }
    : undefined
);
const mainSheet = project.sheet("Main");

if (!isProd) {
  studio.initialize();
  studio.extend(extension);
}

const CameraController = ({ targetRef }) => {
  const targetPosition = useRef(new THREE.Vector3()).current;

  useFrame((state) => {
    if (targetRef.current) {
      targetRef.current.getWorldPosition(targetPosition);
      state.camera.lookAt(targetPosition);
      state.camera.updateProjectionMatrix();
    }
  });

  return null;
};

const AnimatedContent = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  const cameraTarget = useRef();
  const currentPos = useRef(0);
  const prevScroll = useRef(0);

  useFrame((state) => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    const scrollDelta = scroll.offset - prevScroll.current;

    const scrollSpeed = scrollDelta < 0 ? 2 : 1;
    const targetPosition = scroll.offset * sequenceLength;

    const parallaxStrength = 0.02 * scrollSpeed;
    state.camera.position.y += scrollDelta * parallaxStrength;
    state.camera.rotation.z += scrollDelta * 0.01 * scrollSpeed;

    currentPos.current = THREE.MathUtils.lerp(
      currentPos.current,
      targetPosition,
      0.015 * scrollSpeed
    );

    sheet.sequence.position = currentPos.current;

    prevScroll.current = scroll.offset;
  });

  return (
    <>
      <PerspectiveCamera
        makeDefault
        theatreKey="Camera"
        fov={60}
        near={1}
        far={100}
      />

      <e.mesh theatreKey="Target" ref={cameraTarget} visible={false}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshNormalMaterial />
      </e.mesh>

      <CameraController targetRef={cameraTarget} />

      <Experience />
    </>
  );
};

const App = () => {
  return (
    <ScrollControls pages={57}>
      <SheetProvider sheet={mainSheet}>
        <AnimatedContent />
      </SheetProvider>
    </ScrollControls>
  );
};

export default App;

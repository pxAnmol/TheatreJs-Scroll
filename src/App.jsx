// --- Theatre.js Setup ---

import { getProject } from "@theatre/core";
const project = getProject("Project");
const mainSheet = project.sheet("Main");
import { PerspectiveCamera, SheetProvider } from "@theatre/r3f";
import { editable as e } from "@theatre/r3f";

import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import Experience from "./Experience";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

studio.initialize();
studio.extend(extension);

// Helper component to handle the lookAt logic
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

const App = () => {
  const cameraTarget = useRef();

  return (
    <SheetProvider sheet={mainSheet}>
      <PerspectiveCamera
        makeDefault
        theatreKey="Camera"
        position={[3, 4, 5]}
        fov={40}
        near={1}
        far={100}
      />

      <e.mesh theatreKey="Target" ref={cameraTarget} visible={true}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshNormalMaterial />
      </e.mesh>

      <CameraController targetRef={cameraTarget} />

      <Experience />
    </SheetProvider>
  );
};

export default App;

import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Canvas } from "@react-three/fiber";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas camera={{ fov: 60 }} >
      <color attach="background" args={["#000000"]} />
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Canvas>
  </StrictMode>
);

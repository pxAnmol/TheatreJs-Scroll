import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import LoadingScreen from "./LoadingScreen.jsx";
import { Analytics } from "@vercel/analytics/react"

const MobileBlocker = () => (
  <div className="mobile-blocker">
    <span>Your phone is awesome, but the real show's on desktop</span>
  </div>
);

const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth <= 768;

createRoot(document.getElementById("root")).render(
  isMobile() ? (
    <MobileBlocker />
  ) : (
    <>
      <LoadingScreen />

      <Canvas camera={{ fov: 50 }} gl={{ powerPreference: "high-performance" }}>
        <color attach="background" args={["#000000"]} />
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </Canvas>

      <Analytics />
    </>
  )
);

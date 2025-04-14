import React, { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";

const LoadingScreen = () => {
  const { progress } = useProgress();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <>
      <div className={`split-screen top ${isTransitioning ? "slide-up" : ""}`}/>
      <div className={`split-screen bottom ${isTransitioning ? "slide-down" : ""}`}/>
      <div className={`progress-container ${isTransitioning ? "slide-right" : ""}`}>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;

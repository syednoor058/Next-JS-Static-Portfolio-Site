"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Einstein } from "./models/Einstein";

const Scene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

      {/* Environment */}
      <Environment preset="city" />

      {/* Model */}
      <Einstein scale={4} position={[0, -0.5, 0]} />

      {/* Controls */}
      <OrbitControls enableDamping dampingFactor={0.05} enableZoom={false} />
    </>
  );
};

const ModelComp = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        frameloop="demand"
        camera={{ position: [0, 1.5, 5], fov: 50 }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelComp;

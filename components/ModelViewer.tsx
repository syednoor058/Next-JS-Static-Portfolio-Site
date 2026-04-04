"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  OrbitControls,
  Environment,
  Html,
  useProgress,
} from "@react-three/drei";
import EinsteinModel from "./models/EinsteinModel";

// Loading UI
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white text-sm text-nowrap">
        Loading {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

export default function ModelViewer() {
  return (
    <div className="w-full h-60 md:h-80 lg:h-100 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={<Loader />}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {/* HDRI Environment (Professional Look) */}
          <Environment preset="city" />

          {/* Model */}
          <EinsteinModel url="/models/einstein.glb" scale={3.5} />

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
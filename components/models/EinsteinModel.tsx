"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

type Props = {
  url: string;
  scale?: number;
};

export default function EinsteinModel({ url, scale = 1 }: Props) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(url);

  return (
    <group ref={group} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

// Preload for performance
useGLTF.preload("/models/einstein.glb");
"use client";

import React, { JSX } from "react";
import * as THREE from "three";
import { forwardRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    geometry_0: THREE.Mesh;
  };
};

type EinsteinProps = JSX.IntrinsicElements["group"];

export const Einstein = forwardRef<Group, EinsteinProps>((props, ref) => {
  const { nodes, scene } = useGLTF("/models/einstein.glb") as unknown as GLTFResult & {
    scene: THREE.Group;
  };

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();

    box.getSize(size);
    box.getCenter(center);

    // Normalize scale (target size ~2 units)
    const scaleFactor = 2 / Math.max(size.x, size.y, size.z);
    scene.scale.setScalar(scaleFactor);

    // Center the model
    scene.position.sub(center);
  }, [scene]);

  return <primitive ref={ref} object={scene} {...props} />;
});

Einstein.displayName = "Einstein";

useGLTF.preload("/models/einstein.glb");
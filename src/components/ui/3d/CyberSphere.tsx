import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface CyberSphereProps {
  position?: [number, number, number];
  color?: string;
  speed?: number;
  distort?: number;
  scale?: number;
  opacity?: number;
}

export default function CyberSphere({
  position = [0, 0, 0],
  color = '#00e5ff',
  speed = 0.5,
  distort = 0.4,
  scale = 1,
  opacity = 0.8,
}: CyberSphereProps) {
  const sphereRef = useRef<THREE.Mesh>(null);
  const initialPosition = useRef(position);
  const timeOffset = useRef(Math.random() * 100);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      // Gentle rotation
      sphereRef.current.rotation.x = clock.elapsedTime * 0.1 * speed;
      sphereRef.current.rotation.y = clock.elapsedTime * 0.15 * speed;
      
      // Subtle floating movement
      sphereRef.current.position.y = initialPosition.current[1] + Math.sin(clock.elapsedTime * 0.5 + timeOffset.current) * 0.1;
    }
  });

  useEffect(() => {
    if (sphereRef.current) {
      sphereRef.current.position.set(...position);
    }
  }, [position]);

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} scale={scale}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={2}
        transparent
        opacity={opacity}
        roughness={0.4}
        metalness={0.8}
      />
    </Sphere>
  );
}
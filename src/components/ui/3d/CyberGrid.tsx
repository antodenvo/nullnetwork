import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Grid } from '@react-three/drei';
import * as THREE from 'three';

interface CyberGridProps {
  cellSize?: number;
  cellThickness?: number;
  cellColor?: string;
  sectionSize?: number;
  sectionColor?: string;
  sectionThickness?: number;
  fadeDistance?: number;
  fadeStrength?: number;
  infiniteGrid?: boolean;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export default function CyberGrid({
  cellSize = 0.5,
  cellThickness = 0.5,
  cellColor = '#00e5ff',
  sectionSize = 3,
  sectionColor = '#2080ff',
  sectionThickness = 1,
  fadeDistance = 30,
  fadeStrength = 1.5,
  infiniteGrid = true,
  position = [0, -2, 0],
  rotation = [-Math.PI / 2, 0, 0],
}: CyberGridProps) {
  const gridRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (gridRef.current) {
      // Subtle animation for the grid
      const time = clock.getElapsedTime();
      gridRef.current.position.z = (time * 0.15) % cellSize;
    }
  });

  return (
    <Grid
      ref={gridRef}
      position={position}
      rotation={rotation}
      args={[10, 10]}
      cellSize={cellSize}
      cellThickness={cellThickness}
      cellColor={cellColor}
      sectionSize={sectionSize}
      sectionThickness={sectionThickness}
      sectionColor={sectionColor}
      fadeDistance={fadeDistance}
      fadeStrength={fadeStrength}
      infiniteGrid={infiniteGrid}
    />
  );
}
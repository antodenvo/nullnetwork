import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface CyberSceneProps {
  height?: string;
}

// Simplified version to ensure compatibility
export default function CyberScene({
  height = '100vh',
}: CyberSceneProps) {
  return (
    <div style={{ height, width: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#00e5ff" />
          </mesh>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
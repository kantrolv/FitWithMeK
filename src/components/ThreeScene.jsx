import { useRef, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, OrbitControls, useProgress } from '@react-three/drei';
import * as THREE from 'three';

function LoadingScreen() {
  const { progress } = useProgress();
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#fff',
      fontSize: '1.5rem',
      zIndex: 1000
    }}>
      {progress.toFixed(0)}% loaded
    </div>
  );
}

function Dumbbell() {
  const group = useRef();
  
  useFrame((state) => {
    if (group.current) {
      const time = state.clock.getElapsedTime();
      // Smooth floating animation
      group.current.position.y = Math.sin(time) * 0.2;
      // Gentle rotation
      group.current.rotation.y = time * 0.5;
    }
  });

  return (
    <Float 
      speed={2} 
      rotationIntensity={0.5} 
      floatIntensity={0.5}
    >
      <group ref={group}>
        {/* Bar */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.1, 0.1, 1.2, 32]} />
          <meshStandardMaterial 
            color="#888888" 
            metalness={0.8} 
            roughness={0.2}
          />
        </mesh>
        {/* Left weight */}
        <mesh position={[-0.6, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.25, 0.25, 0.4, 32]} />
          <meshStandardMaterial 
            color="#ff416c" 
            metalness={0.8} 
            roughness={0.2}
          />
        </mesh>
        {/* Right weight */}
        <mesh position={[0.6, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.25, 0.25, 0.4, 32]} />
          <meshStandardMaterial 
            color="#ff416c" 
            metalness={0.8} 
            roughness={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function ThreeScene() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
        background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)'
      }}>
        <Canvas
          camera={{ position: [0, 0, 4], fov: 75 }}
          style={{ background: 'transparent' }}
          onCreated={() => setIsLoading(false)}
        >
          <Suspense fallback={null}>
            {/* Lights */}
            <ambientLight intensity={0.5} />
            <spotLight 
              position={[10, 10, 10]} 
              angle={0.15} 
              penumbra={1} 
              intensity={1}
              castShadow
            />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            {/* Main Scene */}
            <Dumbbell />
            
            {/* Environment and Controls */}
            <Environment preset="city" />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
} 
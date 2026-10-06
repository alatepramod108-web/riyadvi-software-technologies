import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Inner Core Mesh
function QuantumCore({ isWireframe }: { isWireframe: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerRingRef = useRef<THREE.Mesh>(null!);
  const secondRingRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x -= delta * 0.18;
      outerRingRef.current.rotation.z += delta * 0.15;
    }
    if (secondRingRef.current) {
      secondRingRef.current.rotation.y += delta * 0.2;
      secondRingRef.current.rotation.z -= delta * 0.12;
    }
  });

  return (
    <group>
      {/* Central Floating Polyhedron */}
      <mesh ref={meshRef} scale={1.6}>
        <icosahedronGeometry args={[1, 1]} />
        {isWireframe ? (
          <meshBasicMaterial color="#F4D36D" wireframe />
        ) : (
          <MeshDistortMaterial
            color="#D4AF37"
            roughness={0.15}
            metalness={0.92}
            distort={0.25}
            speed={2}
          />
        )}
      </mesh>

      {/* Outer Gyro Ring 1 */}
      <mesh ref={outerRingRef} scale={2.4}>
        <torusGeometry args={[1, 0.025, 16, 64]} />
        <meshStandardMaterial color="#E6CA65" metalness={0.95} roughness={0.1} />
      </mesh>

      {/* Outer Gyro Ring 2 */}
      <mesh ref={secondRingRef} scale={2.8} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1, 0.02, 16, 64]} />
        <meshStandardMaterial color="#F7DF84" metalness={0.9} roughness={0.15} wireframe={isWireframe} />
      </mesh>

      {/* Orbiting Satellite Data Nodes */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 3.2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <mesh key={i} position={[x, Math.sin(i * 1.5) * 0.8, z]} scale={0.18}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial
              color="#FFEAA7"
              emissive="#D4AF37"
              emissiveIntensity={0.8}
              roughness={0.1}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Scene Root with mouse tracking and dynamic lighting
function Scene({ isWireframe }: { isWireframe: boolean }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    // Graceful mouse parallax
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (-state.pointer.y * Math.PI) / 8;
    if (groupRef.current) {
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.8} color="#FFF2BA" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#D4AF37" />
      <pointLight position={[0, 5, 0]} intensity={1.5} color="#FFFFFF" />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
        <QuantumCore isWireframe={isWireframe} />
      </Float>

      {/* Golden Cyber Sparkles */}
      <Sparkles count={120} scale={10} size={2.5} speed={0.4} opacity={0.6} color="#F4D36D" />
    </group>
  );
}

export const Hero3D: React.FC = () => {
  const [isWireframe, setIsWireframe] = useState(false);
  const [isInteractive, setIsInteractive] = useState(true);

  return (
    <div className="relative w-full h-[540px] md:h-[620px] flex items-center justify-center">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-amber-600/20 via-yellow-500/10 to-transparent blur-3xl transform scale-125 animate-pulse-glow" />
      </div>

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Scene isWireframe={isWireframe} />
        {isInteractive && <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.7} minPolarAngle={Math.PI / 2.5} />}
      </Canvas>

      {/* Interactive Controls Overlay */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-neutral-300 z-10 shadow-lg">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          Interactive 3D Core
        </span>
        <button
          onClick={() => setIsWireframe(!isWireframe)}
          className="ml-2 px-2.5 py-1 rounded-full bg-white/10 hover:bg-amber-500/20 hover:text-amber-300 transition-colors text-[11px]"
          title="Toggle Wireframe Architecture"
        >
          {isWireframe ? 'Solid PBR' : 'Wireframe'}
        </button>
      </div>
    </div>
  );
};

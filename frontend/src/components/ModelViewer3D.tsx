import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { Eye, RotateCw, Sparkles as SparklesIcon, Layers } from 'lucide-react';

interface ModelProps {
  modelType?: 'luxury-bottle' | 'quantum-core' | 'spatial-device';
  wireframe: boolean;
  materialStyle: 'gold' | 'glass' | 'chrome';
  autoRotate: boolean;
}

// 1. Luxury Perfume Flacon Mesh (for Wanaromah case study)
function LuxuryPerfumeBottle({ wireframe, materialStyle }: { wireframe: boolean; materialStyle: string }) {
  const group = useRef<THREE.Group>(null!);

  const getBodyMaterial = () => {
    if (wireframe) return <meshBasicMaterial color="#E5C158" wireframe />;
    if (materialStyle === 'gold') {
      return <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.15} />;
    }
    if (materialStyle === 'chrome') {
      return <meshStandardMaterial color="#E0E0E0" metalness={0.95} roughness={0.05} />;
    }
    // Frosted luxury glass
    return <meshPhysicalMaterial color="#F7F3E3" transmission={0.9} opacity={1} transparent roughness={0.1} ior={1.5} />;
  };

  const getCapMaterial = () => {
    if (wireframe) return <meshBasicMaterial color="#FFFFFF" wireframe />;
    return <meshStandardMaterial color="#D4AF37" metalness={0.95} roughness={0.1} />;
  };

  return (
    <group ref={group} scale={1.1} position={[0, -0.6, 0]}>
      {/* Bottle Base */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 1.8, 32]} />
        {getBodyMaterial()}
      </mesh>

      {/* Shoulder bevel */}
      <mesh position={[0, 1.8, 0]}>
        <cylinderGeometry args={[0.45, 0.9, 0.3, 32]} />
        {getBodyMaterial()}
      </mesh>

      {/* Bottle Neck */}
      <mesh position={[0, 2.1, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.4, 32]} />
        <meshStandardMaterial color="#C59B27" metalness={0.9} roughness={0.15} wireframe={wireframe} />
      </mesh>

      {/* Gold Crown / Cap */}
      <mesh position={[0, 2.65, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 0.7, 32]} />
        {getCapMaterial()}
      </mesh>

      {/* Golden Brand Medallion on Front */}
      <mesh position={[0, 0.8, 0.92]} rotation={[0, 0, 0]}>
        <circleGeometry args={[0.35, 32]} />
        <meshStandardMaterial color="#FFE28A" metalness={0.98} roughness={0.05} />
      </mesh>
    </group>
  );
}

// 2. Spatial Device / Dental 3D Scanner Mesh
function SpatialDevice({ wireframe, materialStyle }: { wireframe: boolean; materialStyle: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  return (
    <group scale={1.3}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.32, 128, 32]} />
        {wireframe ? (
          <meshBasicMaterial color="#F4D36D" wireframe />
        ) : (
          <meshStandardMaterial
            color={materialStyle === 'gold' ? '#D4AF37' : '#00E5FF'}
            metalness={0.88}
            roughness={0.18}
          />
        )}
      </mesh>

      {/* Orbiting Scanning Sensor Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.02, 16, 64]} />
        <meshBasicMaterial color="#FFE58F" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

// Active Model Scene
function ModelScene({ modelType = 'luxury-bottle', wireframe, materialStyle, autoRotate }: ModelProps) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={2.2} color="#FFFFFF" />
      <pointLight position={[-5, -4, -3]} intensity={1.2} color="#D4AF37" />
      <pointLight position={[0, 4, 0]} intensity={1.5} color="#FFEAA7" />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {modelType === 'luxury-bottle' ? (
          <LuxuryPerfumeBottle wireframe={wireframe} materialStyle={materialStyle} />
        ) : (
          <SpatialDevice wireframe={wireframe} materialStyle={materialStyle} />
        )}
      </Float>

      <Sparkles count={40} scale={6} size={2} speed={0.3} opacity={0.4} color="#D4AF37" />
    </group>
  );
}

export const ModelViewer3D: React.FC<{
  modelType?: 'luxury-bottle' | 'quantum-core' | 'spatial-device';
  title?: string;
  subtitle?: string;
}> = ({
  modelType = 'luxury-bottle',
  title = 'Interactive 3D Product Visualizer',
  subtitle = 'Inspect real-time WebGL mesh, physics textures, and dynamic lighting'
}) => {
  const [wireframe, setWireframe] = useState(false);
  const [materialStyle, setMaterialStyle] = useState<'gold' | 'glass' | 'chrome'>('gold');
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 p-4 md:p-6 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <h4 className="text-lg font-bold text-white font-heading">{title}</h4>
          </div>
          <p className="text-xs text-neutral-400 mt-0.5">{subtitle}</p>
        </div>

        {/* Toolbar Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Material style selector */}
          <div className="flex items-center bg-white/5 rounded-lg p-1 border border-white/10 text-xs">
            <button
              onClick={() => setMaterialStyle('gold')}
              className={`px-2 py-1 rounded transition-colors ${
                materialStyle === 'gold' ? 'bg-amber-400 text-black font-semibold' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Gold PBR
            </button>
            <button
              onClick={() => setMaterialStyle('glass')}
              className={`px-2 py-1 rounded transition-colors ${
                materialStyle === 'glass' ? 'bg-amber-400 text-black font-semibold' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Glass Refraction
            </button>
            <button
              onClick={() => setMaterialStyle('chrome')}
              className={`px-2 py-1 rounded transition-colors ${
                materialStyle === 'chrome' ? 'bg-amber-400 text-black font-semibold' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Chrome
            </button>
          </div>

          {/* Wireframe toggle */}
          <button
            onClick={() => setWireframe(!wireframe)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
              wireframe ? 'bg-amber-400 text-black border-amber-300 font-semibold' : 'bg-white/5 border-white/10 text-neutral-300 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{wireframe ? 'Mesh Visible' : 'Wireframe'}</span>
          </button>

          {/* Auto rotate toggle */}
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
              autoRotate ? 'bg-white/10 border-amber-400/50 text-amber-300' : 'bg-white/5 border-white/10 text-neutral-400'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>{autoRotate ? 'Spinning' : 'Paused'}</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Area */}
      <div className="relative w-full h-[380px] md:h-[460px] cursor-grab active:cursor-grabbing">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          className="w-full h-full"
        >
          <ModelScene
            modelType={modelType}
            wireframe={wireframe}
            materialStyle={materialStyle}
            autoRotate={autoRotate}
          />
          <OrbitControls enableZoom={true} minDistance={3} maxDistance={9} />
        </Canvas>

        {/* Orbit Helper Badge */}
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[11px] text-neutral-300 pointer-events-none flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5 text-amber-400" />
          <span>Click & Drag to rotate in 360° • Scroll to Zoom</span>
        </div>
      </div>
    </div>
  );
};

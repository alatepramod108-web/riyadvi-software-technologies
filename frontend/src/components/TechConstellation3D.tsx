import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Float } from '@react-three/drei';
import * as THREE from 'three';

interface TechNode {
  name: string;
  category: string;
  desc: string;
  position: [number, number, number];
  color: string;
}

const TECH_ITEMS: TechNode[] = [
  { name: 'React.js', category: 'Frontend', desc: 'Reactive Component Architecture', position: [0, 2.4, 0], color: '#61DAFB' },
  { name: 'Next.js', category: 'Full Stack', desc: 'Enterprise Server-Side Rendering & Edge Routing', position: [2.2, 1.2, 0.8], color: '#FFFFFF' },
  { name: 'Three.js', category: '3D & WebGL', desc: 'Real-Time GPU Hardware Accelerated Rendering', position: [-2.1, 1.3, -0.6], color: '#D4AF37' },
  { name: 'Node.js', category: 'Backend', desc: 'High-Concurrency Event-Driven Microservices', position: [2.0, -1.2, -0.7], color: '#68A063' },
  { name: 'MongoDB', category: 'Database', desc: 'Document Data Model for Flexible Dynamic Schemas', position: [-2.2, -1.1, 0.9], color: '#4DB33D' },
  { name: 'R3F / Drei', category: 'Spatial UX', desc: 'Declarative WebGL Canvas Choreography', position: [0.8, -2.3, 0.2], color: '#F4D36D' },
  { name: 'PostgreSQL', category: 'Database', desc: 'ACID Compliant Relational Data Foundations', position: [-0.9, -2.2, -0.8], color: '#336791' },
  { name: 'Python / AI', category: 'Intelligence', desc: 'FastAPI, LangChain & Predictive Machine Learning', position: [0, 0, 2.3], color: '#FFEAA7' },
  { name: 'Docker & AWS', category: 'Cloud DevOps', desc: 'Container Orchestration & Elastic Auto-Scaling', position: [0, 0, -2.3], color: '#FF9900' }
];

function ConstellationOrbit({
  selectedNode,
  onSelectNode
}: {
  selectedNode: TechNode | null;
  onSelectNode: (node: TechNode) => void;
}) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  // Lines connecting to central hub
  const linePoints = useMemo(() => {
    const lines: THREE.Vector3[][] = [];
    TECH_ITEMS.forEach((tech) => {
      lines.push([new THREE.Vector3(0, 0, 0), new THREE.Vector3(...tech.position)]);
    });
    return lines;
  }, []);

  return (
    <group ref={groupRef}>
      {/* Central Core Sphere */}
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color="#D4AF37"
          emissive="#AA841C"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Orbit Rings */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#D4AF37" opacity={0.3} transparent />
      </mesh>
      <mesh rotation={[-Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.6, 0.015, 16, 100]} />
        <meshBasicMaterial color="#F4D36D" opacity={0.25} transparent />
      </mesh>

      {/* Connecting Beam Lines */}
      {linePoints.map((pts, i) => {
        const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
        return (
          <line key={i} geometry={lineGeo}>
            <lineBasicMaterial color="#D4AF37" transparent opacity={0.25} />
          </line>
        );
      })}

      {/* Technology Nodes */}
      {TECH_ITEMS.map((tech) => {
        const isSelected = selectedNode?.name === tech.name;
        return (
          <group key={tech.name} position={tech.position}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
              <mesh onClick={() => onSelectNode(tech)}>
                <sphereGeometry args={[0.22, 16, 16]} />
                <meshStandardMaterial
                  color={isSelected ? '#FFFFFF' : tech.color}
                  emissive={isSelected ? '#F4D36D' : tech.color}
                  emissiveIntensity={isSelected ? 1.2 : 0.4}
                  roughness={0.2}
                  metalness={0.8}
                />
              </mesh>
              <Html distanceFactor={10} center zIndexRange={[100, 0]}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectNode(tech);
                  }}
                  className={`px-2 py-0.5 rounded text-[11px] whitespace-nowrap font-medium transition-all cursor-pointer pointer-events-auto border ${
                    isSelected
                      ? 'bg-amber-400 text-black border-amber-300 scale-110 shadow-lg shadow-amber-400/40'
                      : 'bg-black/80 text-white/90 border-white/20 hover:border-amber-400 hover:text-amber-300'
                  }`}
                >
                  {tech.name}
                </button>
              </Html>
            </Float>
          </group>
        );
      })}
    </group>
  );
}

export const TechConstellation3D: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<TechNode>(TECH_ITEMS[0]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-950/80 to-black border border-white/10 p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* 3D Canvas Visualizer */}
        <div className="lg:col-span-8 h-[420px] md:h-[500px] relative rounded-xl overflow-hidden border border-white/5 bg-radial-gradient">
          <Canvas
            camera={{ position: [0, 0, 6.2], fov: 48 }}
            gl={{ antialias: true, alpha: true }}
            className="w-full h-full cursor-pointer"
          >
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#FFF5D0" />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color="#D4AF37" />
            <ConstellationOrbit selectedNode={selectedNode} onSelectNode={setSelectedNode} />
          </Canvas>

          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-neutral-300">
            <span className="text-amber-400 font-semibold">● 3D Orbiting Ecosystem</span> — Click any node to inspect
          </div>
        </div>

        {/* Dynamic Detail Card */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/30 text-amber-300 uppercase tracking-wider">
            {selectedNode.category}
          </div>
          <h3 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
            <span>{selectedNode.name}</span>
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed">
            {selectedNode.desc}
          </p>
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/10 space-y-2">
            <div className="text-xs text-neutral-400 font-medium">Enterprise Production Standard</div>
            <div className="text-xs text-amber-200/90 leading-relaxed">
              Standardized in the Riyadvi delivery pipeline with automated CI/CD unit testing, linting schemas, and edge telemetry.
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-2">
            {TECH_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => setSelectedNode(item)}
                className={`text-xs px-2.5 py-1 rounded-md border transition-all ${
                  selectedNode.name === item.name
                    ? 'bg-amber-400 text-black font-semibold border-amber-300'
                    : 'bg-white/5 text-neutral-400 border-white/10 hover:border-amber-400/50 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

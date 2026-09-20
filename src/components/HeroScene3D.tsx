import { useRef, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Edges,
  Float,
  Grid,
  MeshTransmissionMaterial,
  RoundedBox,
  Sparkles,
} from "@react-three/drei";

type Vec3 = [number, number, number];

/** Reage ao data-theme para ajustar cores 3D ao tema. */
function useThemeAttr(): "dark" | "light" {
  return useSyncExternalStore(
    (cb) => {
      const obs = new MutationObserver(cb);
      obs.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
      return () => obs.disconnect();
    },
    () => (document.documentElement.dataset.theme === "light" ? "light" : "dark")
  );
}

/** Janela de "desktop" de vidro com transmissão realista + arestas neon. */
function GlassWindow({
  position,
  size,
  rotation = [0, 0, 0] as Vec3,
  color = "#9ad0ff",
}: {
  position: Vec3;
  size: [number, number];
  rotation?: Vec3;
  color?: string;
}) {
  return (
    <Float speed={1.3} rotationIntensity={0.45} floatIntensity={0.9}>
      <group position={position} rotation={rotation}>
        <RoundedBox args={[size[0], size[1], 0.07]} radius={0.06} smoothness={5}>
          <MeshTransmissionMaterial
            background={new THREE.Color("#0d1b33")}
            samples={4}
            resolution={256}
            thickness={0.42}
            roughness={0.08}
            ior={1.4}
            chromaticAberration={0.05}
            anisotropicBlur={0.25}
            distortion={0.28}
            distortionScale={0.35}
            temporalDistortion={0.04}
          />
        </RoundedBox>
        <Edges scale={1.015} color={color} />
      </group>
    </Float>
  );
}

/** Peça central: icosaedro em wireframe + núcleo + anel. */
function Core() {
  return (
    <Float speed={2.2} rotationIntensity={1.1} floatIntensity={1.4}>
      <group position={[0, 0.15, 1.05]}>
        <mesh>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshBasicMaterial wireframe color="#3b82f6" transparent opacity={0.42} />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial
            color="#7be0ff"
            metalness={0.9}
            roughness={0.12}
            emissive="#0891b2"
            emissiveIntensity={0.7}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2.2, 0, 0]}>
          <torusGeometry args={[1.85, 0.012, 16, 100]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.22} />
        </mesh>
      </group>
    </Float>
  );
}

/** Rotação lenta + parallax do rato. */
function SceneRig({ children }: { children: ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    const g = ref.current;
    if (!g) return;
    g.rotation.y += delta * 0.12;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, state.pointer.y * 0.2, 0.05);
    g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, -state.pointer.x * 0.06, 0.05);
  });
  return <group ref={ref}>{children}</group>;
}

export default function HeroScene3D() {
  const theme = useThemeAttr();
  const accent = theme === "light" ? "#2563eb" : "#38bdf8";
  const gridLine = theme === "light" ? "#93b4e0" : "#16324f";

  return (
    <div className="hero-3d-stage">
      <Canvas
        camera={{ position: [4.6, 2.3, 6.4], fov: 42 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 7, 4]} intensity={1.4} color="#eaf2ff" />
        <pointLight position={[-4, 1, -3]} intensity={26} color="#22d3ee" />
        <pointLight position={[3, -2, 3]} intensity={18} color="#8b5cf6" />

        <SceneRig>
          <GlassWindow position={[-1.9, 0.9, -0.9]} size={[2.05, 1.35]} rotation={[0, 0.35, -0.06]} />
          <GlassWindow position={[1.9, 0.35, -0.5]} size={[1.75, 1.15]} rotation={[0, -0.4, 0.05]} color="#7dd3fc" />
          <GlassWindow position={[-1.1, -0.95, 0.4]} size={[1.95, 1.2]} rotation={[0, 0.2, -0.05]} color="#a5b4fc" />
          <GlassWindow position={[1.35, 1.55, -1.1]} size={[1.35, 0.9]} rotation={[0, -0.25, 0.09]} color="#67e8f9" />
          <GlassWindow position={[0.4, -0.35, 1.5]} size={[1.2, 0.85]} rotation={[0, -0.12, 0.04]} color="#bae6fd" />
          <Core />
        </SceneRig>

        <Grid
          position={[0, -1.7, 0]}
          args={[12, 12]}
          cellSize={0.45}
          cellThickness={0.6}
          cellColor={gridLine}
          sectionSize={1.8}
          sectionThickness={1.1}
          sectionColor={accent}
          fadeDistance={10}
          fadeStrength={1.1}
          infiniteGrid
        />
        <Sparkles count={90} scale={[5.5, 3.4, 3]} size={2} speed={0.28} opacity={0.55} color="#67e8f9" />
      </Canvas>
    </div>
  );
}
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const COUNT = 140;
const LINK_DIST = 2.4;

function readColor(name: string, fallback: string) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const c = new THREE.Color();
  try {
    const probe = document.createElement("div");
    probe.style.color = v || fallback;
    document.body.appendChild(probe);
    const rgb = getComputedStyle(probe).color;
    probe.remove();
    const m = rgb.match(/[\d.]+/g);
    if (m && rgb.startsWith("rgb")) c.setRGB(Number(m[0]) / 255, Number(m[1]) / 255, Number(m[2]) / 255);
    else c.set(fallback);
  } catch {
    c.set(fallback);
  }
  return c;
}

function Network() {
  const group = useRef<THREE.Group>(null);
  const primary = useMemo(() => readColor("--primary", "#4ade80"), []);
  const accent = useMemo(() => readColor("--accent", "#f0a040"), []);

  const { points, lines } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < COUNT; i++) {
      pts.push(
        new THREE.Vector3((Math.random() - 0.5) * 18, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 10),
      );
    }
    const linePos: number[] = [];
    for (let i = 0; i < COUNT; i++)
      for (let j = i + 1; j < COUNT; j++)
        { const a = pts[i]!, b = pts[j]!; if (a.distanceTo(b) < LINK_DIST) linePos.push(...a.toArray(), ...b.toArray()); }
    const pg = new THREE.BufferGeometry().setFromPoints(pts);
    const lg = new THREE.BufferGeometry();
    lg.setAttribute("position", new THREE.Float32BufferAttribute(linePos, 3));
    return { points: pg, lines: lg };
  }, []);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const dt = Math.min(delta, 0.05);
    g.rotation.y += dt * 0.04;
    g.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.15;
    g.position.y = -window.scrollY * 0.002;
    const tx = state.pointer.x * 0.6;
    const ty = state.pointer.y * 0.4;
    state.camera.position.x += (tx - state.camera.position.x) * (1 - Math.exp(-2 * dt));
    state.camera.position.y += (ty - state.camera.position.y) * (1 - Math.exp(-2 * dt));
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <points geometry={points}>
        <pointsMaterial color={primary} size={0.07} sizeAttenuation transparent opacity={0.9} />
      </points>
      <lineSegments geometry={lines}>
        <lineBasicMaterial color={primary} transparent opacity={0.14} />
      </lineSegments>
      <mesh position={[4, 1.5, -2]}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial color={accent} wireframe transparent opacity={0.18} />
      </mesh>
      <mesh position={[-5, -2, -3]}>
        <torusKnotGeometry args={[1.1, 0.3, 80, 10]} />
        <meshBasicMaterial color={primary} wireframe transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

export default function NetworkBackground() {
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 1.5]} frameloop={reduce ? "demand" : "always"} gl={{ alpha: true, antialias: true }}>
        <Network />
      </Canvas>
    </div>
  );
}

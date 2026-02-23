import { useEffect, useRef } from "react";
import * as THREE from "three";
import { createBlob } from "./blob";

export default function HeroBlob() {
  const mountRef = useRef(null);
  const frameRef = useRef(null); // for cancelling animation

  useEffect(() => {
    if (!mountRef.current) return;

    // ===== SCENE =====
    const scene = new THREE.Scene();

    // ===== CAMERA =====
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 4;

    // ===== RENDERER =====
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const canvas = renderer.domElement;
    mountRef.current.appendChild(canvas);

    // ===== BLOB =====
    const blob = createBlob();
    scene.add(blob);

    // ===== ANIMATION =====
 const startTime = performance.now();

const animate = () => {
  const elapsed = (performance.now() - startTime) / 1000;
  blob.material.uniforms.uTime.value = elapsed;
  renderer.render(scene, camera);
  frameRef.current = requestAnimationFrame(animate);
};

    animate();

    // ===== RESIZE =====
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // ===== CLEANUP (CRITICAL FIX) =====
    return () => {
      window.removeEventListener("resize", handleResize);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      scene.remove(blob);
      blob.geometry.dispose();
      blob.material.dispose();

      renderer.dispose();

      // SAFE DOM removal
      if (mountRef.current && mountRef.current.contains(canvas)) {
        mountRef.current.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
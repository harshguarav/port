import * as THREE from "three";
import vertex from "./shaders/vertex.glsl?raw";
import fragment from "./shaders/fragment.glsl?raw";

export function createBlob() {
  const geometry = new THREE.IcosahedronGeometry(0.8, 64);

  const material = new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
    uniforms: {
      uTime: { value: 0 },
    },
  });

  return new THREE.Mesh(geometry, material);
}
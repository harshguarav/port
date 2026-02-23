uniform float uTime;
varying vec3 vNormal;

void main() {
  vNormal = normal;

  vec3 pos = position;

  float noise =
    sin(pos.x * 3.0 + uTime) *
    sin(pos.y * 3.0 + uTime) *
    sin(pos.z * 3.0 + uTime);

  pos += normal * noise * 0.25;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
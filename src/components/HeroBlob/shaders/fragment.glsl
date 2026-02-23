varying vec3 vNormal;

void main() {
  float light = dot(normalize(vNormal), vec3(0.2, 0.4, 1.0));
  light = smoothstep(0.0, 1.0, light);

  vec3 color = vec3(0.92, 0.96, 1.0) * light;

  gl_FragColor = vec4(color, 0.75);
}
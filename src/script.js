import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

scene.add(camera);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const clock = new THREE.Clock();

const tick = () => {
  mesh.rotation.y += 0.01;

  window.requestAnimationFrame(tick);
  renderer.render(scene, camera);
};

tick();

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  renderer.setSize(sizes.width, sizes.height);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Add a basic cube as placeholder (replace with map model)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Map selector (add logic to load different models)
document.getElementById('mapSelect').addEventListener('change', (e) => {
    // Here, load different 3D models based on selection
    // Example: Use THREE.GLTFLoader for real models
    console.log('Selected map:', e.target.value);
});